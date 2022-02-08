import React from 'react';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        This beat is called: {this.props.beat.title}
      </div>
    )
  }
}

export default FeedIndexItem