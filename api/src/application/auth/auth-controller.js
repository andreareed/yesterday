const JWT = require('jsonwebtoken');
const Boom = require('boom');
const bcrypt = require('bcrypt');
const Wreck = require('@hapi/wreck');
const queryString = require('query-string');

const service = require('./auth-service');
const userService = require('../user/user-service');
const config = require('../../../config');

module.exports = {
  async getToken(request) {
    const { email, password } = request.payload;
    const invalidUserError = Boom.badRequest('Incorrect email address or password');
    const user = await userService.findByEmail(email);

    if (!user) {
      return invalidUserError;
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      return invalidUserError;
    }

    user.token = await service.signJWT(user);
    delete user.password;

    return user;
  },

  async verifyToken(request) {
    const { token } = request.payload;
    const verified = JWT.verify(token, config.auth.jwtSecret);

    if (verified) {
      const user = await userService.findById(verified.id);
      delete user.password;
      user.token = token;
      return user;
    }

    throw Boom.unauthorized('Unable to verify user');
  },

  async postGitHubToken(request) {
    const { auth, payload } = request;

    const options = {
      baseUrl: 'https://github.com',
      payload: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: payload.code,
        accept: 'json',
        scope: 'repo',
      },
    };

    const promise = Wreck.request('POST', '/login/oauth/access_token', options);
    try {
      const buffer = await promise;
      const body = await Wreck.read(buffer, options);

      const { access_token } = queryString.parse(body.toString());
      return userService.postGitHubToken(auth.credentials.id, access_token);
    } catch (err) {
      throw Boom.badData('Unable to validate GitHub account');
    }
  },
};
