import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepos } from './github-actions';

import Dashboard from './Dashboard'

const mapStateToProps = state => {
  return {
    repos: state.github.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRepos: () => dispatch(getRepos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
