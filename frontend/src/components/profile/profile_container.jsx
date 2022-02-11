import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        userId: ownProps.match.params.id,
        user: state.users[ownProps.match.params.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id))
    }
}

export default connect(mSTP, mDTP)(Profile)