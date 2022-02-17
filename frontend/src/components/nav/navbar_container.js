import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    logInDemoUser: () => dispatch(login({email: "guest@user.com", password: "NobodyWillGuessThis18"}))
  }
}
export default connect(mapStateToProps, mDTP)(NavBar);