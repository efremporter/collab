import React from 'react';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';

class FeedIndexItem extends React.Component {       
  constructor(props) {
    super(props)
    this.state = {comments: null, button: <button className="comments-button" onClick={this.getComments.bind(this)}>Comments</button>}
    this.getHandle = this.getHandle.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.beat.user)
  }

  parseDate() {
    let dateStr = `${this.props.beat.date}`
    let dateArr = dateStr.split('T')
    let dateFirst = dateArr[0]
    let dateSecond = dateArr[1]
    let dateFirstSplit = dateFirst.split('-')
    let dateSecondSplit = dateSecond.split(':')
    let year = dateFirstSplit.slice(0, 1)
    let month = dateFirstSplit.slice(1, 2)
    let day = dateFirstSplit.slice(2, 3)
    let hour = dateSecondSplit.slice(0, 1)
    let minute = dateSecondSplit.slice(1, 2)
    let AMPM = ""
    if (parseInt(`${hour}`) < 12) {
      AMPM = "AM"
    } else {
      let PMHour = parseInt(`${hour}` - 12)
      hour = `${PMHour}`
      AMPM = "PM"
    }
    return `${month}/${day}/${year[0].slice(2)} ${hour}:${minute} ${AMPM}`
  }

  getComments() {
    this.setState({
      comments: <div className="open-comments-feed"><CommentsIndexContainer id={this.props.id} beat={this.props.beat} /></div>,
      button: <button className="comments-button" onClick={this.closeComments.bind(this)}>Close</button>
    })
  }

  closeComments() {
    this.setState({comments: null, button: <button className="comments-button" onClick={this.getComments.bind(this)}>Comments</button>})
  }

  getHandle() {
    if (!this.props.users || !this.props.users[this.props.beat.user]) return null;
    return this.props.users[this.props.beat.user].handle
  }

  render() {
    return (
      <div className="feed-beat">
        <div className="feed-beat-content">
          <div style={{ textDecoration: 'none' }}><h1 className="feed-beat-title">{this.props.beat.title}</h1></div>
          <div className="feed-beat-author"><Link to={`/profile/${this.props.beat.user}`}style={{ textDecoration: 'none' }}><h1 className="feed-beat-author">{this.getHandle()}</h1></Link></div>
          <div className="feed-beat-date">
            {this.parseDate()}
          </div>
        <audio className="audio-player" controls>
          <source  src={`/api/beats/stream/${this.props.beat.file}`}/>
        </audio>
          
        </div>
        <div>{this.state.button}</div>
        <div className="comments">{this.state.comments}</div>
      </div>
    )
  }
}

export default FeedIndexItem