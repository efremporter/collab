import React from 'react'

class BeatsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // if (!this.props.beat) return null;
    return (
      <div> The title of this beat is: 
        {this.props.beat.title}
      </div>
    )
  }
}

export default BeatsIndexItem