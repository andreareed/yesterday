import merge from './common/utils/merge';

const defaults = {};

const environments = {
  development: {
    apiUrl: '/api/',
    github: {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      redirect_uri: 'https://localhost.com:3000/auth'
    },
  },
  production: {
    apiUrl: '/api/',
    github: {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      redirect_uri: 'https://getyesterday.dev/auth',
    },
  },
};

export default merge(defaults, environments[process.env.REACT_APP_ENV]);
