import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import compose from 'lodash/flowRight';

import styles from './styles';
import Login from './Login';

import { login } from '../../redux/actions';

const mapStateToProps = state => ({
  error: state.user.get('error'),
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(login(values)),
});

export default compose(
  felaConnect(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login);
