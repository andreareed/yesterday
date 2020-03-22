const Octokit = require('../../lib/octokit');

module.exports = {
  getRepos(githubToken) {
    const octokit = Octokit(githubToken);
    // return octokit.request('/user/repos');
    return octokit.repos.list({
      // username: 'andreareed',
      // // affiliation: 'organization_member',
      // visibility: 'all',
      type: 'private',
      // per_page: 100,
    });
  },
};
