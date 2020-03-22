const { Octokit } = require('@octokit/rest');

const octokit = auth =>
  new Octokit({
    auth,
    userAgent: 'Yesterday',
    baseUrl: 'https://api.github.com',
    log: {
      warn: console.warn,
      error: console.error,
    },
  });

module.exports = octokit;
