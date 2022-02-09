import React from 'react';
import ProfileBeatsIndexContainer from './profile_beats_index_container';
import PostBeatFormContainer from './post_beat_form_container';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <PostBeatFormContainer />
        <ProfileBeatsIndexContainer />
      </div>
    )
  }
}

export default Profile