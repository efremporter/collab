import React from 'react';

class PostCommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: '', file: null, user: this.props.id, beat: this.props.beat._id}
    this.handleChange = this.handleChange.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
  }

  handleSubmit() {
    this.props.createComment(this.state)
    this.handleErrors()
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
    const titleLength = this.props.errors.includes('Comment title must be between 2 and 140 characters')
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
      <form>
        <div>Post a comment!</div>
        <input type="file" onChange={this.handleChange('file')}/>
        <input type="text" value={this.state.title} placeholder="Title Your Comment" onChange={this.handleChange('title')}/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        <div className='profile-post-beat-errors-container'>
          {this.props.errors.map(error => {
            return <div className='profile-post-beat-error'>{error}</div>
          })}
        </div>
      </form>
    )
  }
}

export default PostCommentForm;