import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

class Dashboard extends Component {
  static propTypes = {
    getRepos: PropTypes.func.isRequired,
    repos: PropTypes.instanceOf(Map),
  };

  componentDidMount() {
    const { getRepos } = this.props;
    getRepos();
  }

  render() {
    return <div>Dashboard</div>;
  }
}

export default Dashboard;
