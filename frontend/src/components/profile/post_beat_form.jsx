import React from 'react';

class PostBeatForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: '', file: null, user: this.props.currentUser}
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    this.props.createBeat(this.state)
  }

  handleChange(key) {
    return e => {
      this.setState({[key]: e.currentTarget.value}, () => {
      })
    }
  }

  render() {
    return (
      <form action="">
        <input type="file" onChange={this.handleChange('file')}></input>
        <br></br><br></br>
        <input type="text" placeholder="Title your beat" value={this.state.title} onChange={this.handleChange('title')}></input>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    )
  }
}

export default PostBeatForm;