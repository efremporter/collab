import { connect } from "react-redux";
import { fetchAllBeats } from "../../../actions/beat_actions";
import Feed from './feed';

const mSTP = state => {
  return {
    beats: Object.values(state.beats)
  }
}

const mDTP = dispatch => {
  return {
    fetchAllBeats: () => dispatch(fetchAllBeats())
  }
}

export default connect(mSTP, mDTP)(Feed)