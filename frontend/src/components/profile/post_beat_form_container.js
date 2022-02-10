import { connect } from "react-redux";
import PostBeatForm from './post_beat_form'
import { createBeat } from "../../actions/beat_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user,
    errors: Object.values(state.errors.beats)
  }
}

const mDTP = dispatch => {
  return {
    createBeat: beat => dispatch(createBeat(beat))
  }
}

export default connect(mSTP, mDTP)(PostBeatForm)