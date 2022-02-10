import React from 'react'
import ProfileBeatsIndexItem from './profile_beats_index_item';

class ProfileBeatsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBeats(this.props.userId);
  }

  render() {
    return (
      <div>
        <div>This is the profile beats index!</div>
        <ul>
          {this.props.beats.map( (beat, idx) => {
            return <ProfileBeatsIndexItem deleteBeat={this.props.deleteBeat} key={idx} beat={beat} />
          })}
        </ul>
        <div>
          <button onClick={this.play}>Play</button>
        </div>
      </div>
    )
  }
}

export default ProfileBeatsIndex;