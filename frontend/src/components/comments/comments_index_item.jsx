import React from 'react'

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  parseDate() {
    let dateStr = `${this.props.comment.date}`
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
    return `${hour}:${minute} ${AMPM}  ${month}/${day}/${year[0].slice(2)}`
  }


  render() {
    if (this.props.comment.beat === this.props.beat._id) {
      return (
        <div className="profile-index-beat">
          <div className="profile-index-beat-title">
            {this.props.comment.title}
          </div> 
          <div className="profile-index-beat-date">
            {this.parseDate()}
          </div>
          <audio controls>
            <source src={`/api/comments/stream/${this.props.comment.file}`}/>
          </audio>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default CommentsIndexItem