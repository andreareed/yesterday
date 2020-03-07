export default {
  wrapper: props => ({
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
  }),
  form: props => ({
    width: '100%',
    maxWidth: '400px',
  }),
  error: props => ({
    backgroundColor: props.theme.colors.red,
    padding: '12px',
    marginTop: '12px',
    textAlign: 'center',
    color: props.theme.colors.white,
    fontFamily: props.theme.fonts.primary,
  }),
};
