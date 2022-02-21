import React from 'react';
import ProfileBeatsIndexContainer from './profile_beats_index_container';
import PostBeatFormContainer from './post_beat_form_container';
import * as profilecss from './profile.css'
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    if (!this.props.user) return null;
    if (this.props.currentUser.id === this.props.userId) {
      return (
        <div>
          <div className="profile-welcome-title"><Link to={'/feed'}><img id="profile-logo" src={require('../../images/collab-2.png')}/></Link></div>
          <div className='profile-title'>{this.props.currentUser.handle}'s Profile</div>
          <div className="beat-form-and-profile-beats">
          <PostBeatFormContainer />
          <ProfileBeatsIndexContainer id={this.props.currentUser.id} currentUser={this.props.currentUser} />
          </div>
          </div>

      )
    } else {
      return (
        <div>
          <div className="profile-welcome-title"><Link to={'/feed'}><img id="profile-logo" src={require('../../images/collab-2.png')} /></Link></div>
          <div className='profile-title'>{this.props.user.handle}'s Profile</div>
          <ProfileBeatsIndexContainer id={this.props.user._id} currentUser={this.props.user} />
      </div>
      )
    }
  }
}

export default Profile