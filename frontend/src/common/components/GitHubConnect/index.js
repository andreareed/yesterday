import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import compose from 'lodash/flowRight';

import styles from './styles';
import GitHubConnect from './GitHubConnect';

import { verifyGitHubCode } from '../../../redux/actions';

const mapStateToProps = state => ({
  error: state.user.get('error'),
});

const mapDispatchToProps = dispatch => ({
  verifyGitHubCode: code => dispatch(verifyGitHubCode(code)),
});

export default compose(
  felaConnect(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GitHubConnect);
