import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = state => {
    return {
        currentUser: state.session.user
    }
}

export default connect(mSTP, null)(Profile)