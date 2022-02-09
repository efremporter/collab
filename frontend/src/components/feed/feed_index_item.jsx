import React from 'react';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props)
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
    return `${hour}:${minute} ${AMPM}  ${month}/${day}/${year[0].slice(2)}`
  }

  render() {
    return (
      <div className="feed-beat">
        <div className="feed-beat-title">
          {this.props.beat.title}
        </div> 
        <div className="feed-beat-date">
          {this.parseDate()}
        </div>
      </div>
    )
  }
}

export default FeedIndexItem