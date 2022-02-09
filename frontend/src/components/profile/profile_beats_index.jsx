import React from 'react'
import ProfileBeatsIndexItem from './profile_beats_index_item';

class BeatsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBeats(this.props.userId);
  }

  play() {
    const beat = new Audio('/Users/efrem/Desktop/collab/frontend/src/components/profile/beat.mp3');
    console.log(beat);
    beat.play();
  }

  handleSubmit() {
    console.log("Send req")
  }

  render() {
    // const beat = <audio id="beat" src='../../../beat.mp3'></audio>
    // const music = new Audio('beat.mp3');
    // music.play();
    return (
      <div>
        <div>This is the profile beats index!</div>
        <ul>
          {this.props.beats.map( (beat, idx) => {
            return <ProfileBeatsIndexItem key={idx} beat={beat} />
          })}
        </ul>
        <div>
          {/* <audio id="audio"><source type="audio/mpeg" src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></source></audio> */}
          <button onClick={this.play}>Play</button>
        </div>
      </div>
    )
  }
}

export default BeatsIndex;