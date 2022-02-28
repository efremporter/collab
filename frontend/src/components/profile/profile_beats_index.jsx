import React from 'react'
import ProfileBeatsIndexItem from './profile_beats_index_item';
import * as profilecss from './profile.css'

class ProfileBeatsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBeats(this.props.id);
  }

  sameUser() {
    return this.props.currentUser.id === this.props.id
  }

  render() {
    return (
      <div className='profile-index-container'>
        <div className='profile-index-title'>{this.props.currentUser.handle}'s Beats</div>
        <div className='profile-index-beats-container'>
          {this.props.beats.map( (beat, idx) => {
            return <ProfileBeatsIndexItem id={this.props.id} user={this.props.user} delete={this.sameUser()} deleteBeat={this.props.deleteBeat} key={beat._id} beat={beat} />
          })}
        </div>
      </div>
    )
  }
}

export default ProfileBeatsIndex;