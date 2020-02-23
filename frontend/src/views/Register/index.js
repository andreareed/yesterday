import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import compose from 'lodash/flowRight';

import styles from './styles';
import Register from './Register';

import { registerUser } from '../../redux/actions';

const mapStateToProps = state => ({
  error: state.user.get('error'),
});

const mapDispatchToProps = dispatch => ({
  registerUser: values => dispatch(registerUser(values)),
});

export default compose(
  felaConnect(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Register);
