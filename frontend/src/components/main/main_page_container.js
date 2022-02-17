import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import MainPage from './main_page';

const mDTP = dispatch => {
  return {
    logInGuestUser: () => dispatch(login({email: "guest@user.com", password: "NobodyWillGuessThis18"}))
  }
}
export default connect(mapStateToProps, mDTP)(MainPage);


