import React from 'react';
import ProfileBeatsIndexContainer from './profile_beats_index_container';
import PostBeatFormContainer from './post_beat_form_container';
import * as profilecss from './profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='profile-title'>Profile</div>
        <PostBeatFormContainer />
        <ProfileBeatsIndexContainer />
      </div>
    )
  }
}

export default Profile