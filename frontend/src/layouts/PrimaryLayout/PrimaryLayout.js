import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GitHubConnect from '../../common/components/GitHubConnect';

class PrimaryLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, user } = this.props;

    if (!user.getIn(['data', 'github_token'])) {
      return <GitHubConnect />;
    }

    return (
      <div>
        <div>{children}</div>
      </div>
    );
  }
}

export default PrimaryLayout;
