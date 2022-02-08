import React from 'react'
import BeatsIndexItem from './beats_index_item';

class BeatsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllBeats();
  }

  render() {
    // console.log(this.props.beats)
    return (
      <div>
        <div>This is the profile beats index!</div>
        <ul>
          {this.props.beats.map( (beat, idx) => {
            return <BeatsIndexItem key={idx} beat={beat} />
          })}
        </ul>
      </div>
    )
  }
}

export default BeatsIndex;