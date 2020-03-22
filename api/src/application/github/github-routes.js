const controller = require('./github-controller');

const GitHubRoutes = {
  name: 'GitHub Routes',
  register: async (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/github/user',
        handler: controller.getRepos,
        config: {
          auth: {
            strategies: ['jwt'],
          },
        },
      },
    ]);
  },
};

module.exports = GitHubRoutes;
