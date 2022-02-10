import React from 'react'
import ProfileBeatsIndexItem from './profile_beats_index_item';
import * as profilecss from './profile.css'

class ProfileBeatsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBeats(this.props.userId);
  }

  render() {
    console.log(this.props)
    return (
      <div className='profile-index-container'>
        <div className='profile-index-title'>{this.props.currentUser.handle}'s Beats</div>
        <div className='profile-index-beats-container'>
          {this.props.beats.map( (beat, idx) => {
            return <ProfileBeatsIndexItem deleteBeat={this.props.deleteBeat} key={idx} beat={beat} />
          })}
        </div>
        <div>
          <button onClick={this.play}>Play</button>
        </div>
      </div>
    )
  }
}

export default ProfileBeatsIndex;