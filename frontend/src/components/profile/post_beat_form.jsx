import React from 'react';
import * as profilecss from './profile.css'

class PostBeatForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: '', file: null, user: this.props.currentUser}
    this.handleChange = this.handleChange.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
  }

  handleSubmit() {
    this.props.createBeat(this.state)
    this.handleErrors();
  }

  handleChange(key) {
    return e => {
      if (key === 'title') {
        this.setState({[key]: e.currentTarget.value})
      } else {
        this.setState({[key]: e.target.files[0]})
      }
    }
  }

  handleErrors() {
    const invalidFile = this.props.errors.includes('File is invalid');
    const titleLength = this.props.errors.includes('Beat title must be between 2 and 140 characters')
    const invalidTitle = this.props.errors.includes('Title field is required')
    if ((invalidTitle || titleLength) && invalidFile) {
      this.setState({title: '', file: null, user: this.props.currentUser})
    } else if (invalidTitle || titleLength) {
      this.setState({title: '', file: this.state.file, user: this.props.currentUser})
    } else if (invalidFile) {
      this.setState({title: this.state.title, file: null, user: this.props.currentUser})
    } else {
      this.setState({title: '', file: null, user: this.props.currentUser})
    }
  }

  render() {
    return (
      <form className="profile-beat-form" action="">
        <div className='profile-post-beat-title'>Post a Beat</div>
        <div className='profile-post-beat-container'>
          <input className='profile-post-beat-upload' type="file" onChange={this.handleChange('file')}></input>
          <div className='profile-post-beat-input'><input id='profile-post-beat-input' type="text" placeholder="Title Your Beat" value={this.state.title} onChange={this.handleChange('title')}></input></div>
          <button className='profile-post-beat-submit-but' onClick={this.handleSubmit.bind(this)}>Submit</button>
          <div className='profile-post-beat-errors-container'>
            {this.props.errors.map(error => {
              return <div className='profile-post-beat-error'>{error}</div>
            })}
          </div>
        </div>
      </form>
    )
  }
}

export default PostBeatForm;