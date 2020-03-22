const service = require('./github-service');

module.exports = {
  async getRepos(request) {
    return service.getRepos(request.auth.credentials.github);
  },
};
