import React from 'react';
import FeedIndexItem from './feed_index_item';
import * as feedcss from "./feed.css";
import Profile from '../profile/profile';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllBeats();
  }

  render() {
    return (
      <div>
        <div className="feed-title">FEED</div>
        <div className="welcome-title-2"><img id="logo-2" src={require('../../images/collab-2.png')} /></div>
        <div className="feed-beats-container">
          {this.props.beats.map( (beat, idx) => {
            return <FeedIndexItem id={this.props.id} fetchUser={this.props.fetchUser} users={this.props.users} key={idx} beat={beat} />
          })}
        </div>
      </div>
    )
  }
}

export default Feed;