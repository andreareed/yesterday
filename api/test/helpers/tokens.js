const authService = require('../../src/application/auth/auth-service');

module.exports = {
  getTokenForUser: async user => {
    return authService.signJWT(user);
  },
};
