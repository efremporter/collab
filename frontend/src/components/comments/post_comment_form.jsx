import React from 'react';

class PostCommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: '', file: null, user: this.props.id, beat: this.props.beat._id}
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    this.props.createComment(this.state)
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

  render() {
    return (
      <form>
        <div>Post a comment!</div>
        <input type="file" onChange={this.handleChange('file')}/>
        <input type="text" value={this.state.title} placeholder="Title Your Comment" onChange={this.handleChange('title')}/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    )
  }
}

export default PostCommentForm;