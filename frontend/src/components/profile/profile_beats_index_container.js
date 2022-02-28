import { connect } from 'react-redux';
import { fetchBeats, deleteBeat } from '../../actions/beat_actions';
import ProfileBeatsIndex from './profile_beats_index';

const mSTP = state => {
  return {
    beats: Object.values(state.beats).sort((a,b) => b['date'].localeCompare(a['date']))
  }
}

const mDTP = dispatch => {
  return {
    fetchBeats: userId => dispatch(fetchBeats(userId)),
    deleteBeat: beatId => dispatch(deleteBeat(beatId))
  }
}

export default connect(mSTP, mDTP)(ProfileBeatsIndex)