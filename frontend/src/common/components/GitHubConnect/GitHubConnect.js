import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import config from '../../../config';

class GitHubConnect extends Component {
  static propTypes = {
    verifyGitHubCode: PropTypes.func.isRequired,
    styles: PropTypes.object,
  };

  componentDidMount() {
    const { location, verifyGitHubCode } = this.props;
    const { code } = queryString.parse(location.search);

    if (code) {
      verifyGitHubCode(code);
    }
  }

  render() {
    const { styles } = this.props;

    return (
      <div className={styles.wrapper}>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${config.github.client_id}&redirect_uri=${config.github.redirect_uri}`}
        >
          Connect
        </a>
      </div>
    );
  }
}

export default withRouter(GitHubConnect);
