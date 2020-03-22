const Octokit = require('../../lib/octokit');

module.exports = {
  getRepos(githubToken) {
    const octokit = Octokit(githubToken);
    return octokit.repos.list({ per_page: 100 });
  },
};
