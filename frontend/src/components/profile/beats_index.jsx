import React from 'react'
import BeatsIndexItem from './beats_index_item';

class BeatsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBeats(this.props.userId);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>All YOUR BEATS</div>
        <div>
          {this.props.beats.map( (beat, idx) => {
            return <BeatsIndexItem key={idx} beat={beat} />
          })}
        </div>
      </div>
    )
  }
}

export default BeatsIndex;