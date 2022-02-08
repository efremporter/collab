import React from 'react';
import BeatsIndex from './beats_index';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <BeatsIndex />
      </div>
    )
  }
}

export default Profile