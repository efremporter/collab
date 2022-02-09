import React from 'react';
import FeedIndexItem from './feed_index_item';
import * as feedcss from "./feed.css";

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
        <div className="feed-title">Beats Feed: </div>
        <div className="feed-beats-container">
          {this.props.beats.map( (beat, idx) => {
            return <FeedIndexItem key={idx} beat={beat} />
          })}
        </div>
      </div>
    )
  }
}

export default Feed;