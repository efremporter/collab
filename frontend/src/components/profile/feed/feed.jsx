import React from 'react'
import FeedIndexItem from './feed_index_item';

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
        <h2>This is the feed!</h2>
        <div>
          {this.props.beats.map( (beat, idx) => {
            return <FeedIndexItem key={idx} beat={beat} />
          })}
        </div>
      </div>
    )
  }
}

export default Feed;