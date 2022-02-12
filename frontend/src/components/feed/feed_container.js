import { connect } from "react-redux";
import { fetchAllBeats } from "../../actions/beat_actions";
import { fetchUser } from "../../actions/user_actions";
import Feed from './feed';

const mSTP = state => {
  return {
    beats: Object.values(state.beats),
    users: state.users,
    id: state.session.user.id
  }
}

const mDTP = dispatch => {
  return {
    fetchAllBeats: () => dispatch(fetchAllBeats()),
    fetchUser: id => dispatch(fetchUser(id))
  }
}

export default connect(mSTP, mDTP)(Feed)