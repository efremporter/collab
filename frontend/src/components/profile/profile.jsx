import React from 'react';
import BeatsIndexContainer from './beats_index_container';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <BeatsIndexContainer />
      </div>
    )
  }
}

export default Profile