import { connect } from 'react-redux';
import Footer from './footer';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

export default connect(mapStateToProps, null)(Footer);