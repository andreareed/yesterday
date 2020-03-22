import client from '../../client';

export const actionConstants = {
  GET_REPO: 'GET_REPO',
};

export const getRepos = () => ({
  type: actionConstants.GET_REPO,
  promise: client.get('github/user'),
});
