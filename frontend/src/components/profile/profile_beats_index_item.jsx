import React from 'react'
import * as profilecss from './profile.css'

class ProfileBeatsIndexItem extends React.Component {
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

  delete() {
    this.props.deleteBeat(this.props.beat._id)
  }


  
  render() {
    let button = null
    if (this.props.delete) {
      button = <button className="profile-delete-but" onClick={this.delete.bind(this)}>Delete</button>
    }
    return (
      <div className="profile-index-beat">
        <div className="profile-index-beat-title">
          {this.props.beat.title}
        </div> 
        <div className="profile-index-beat-date">
          {this.parseDate()}
        </div>
        {/* <img src="c.jpeg" alt="" /> */}
        {/* <img src={`/api/beats/stream/${this.props.beat.file}`}/> */}
        <audio controls>
          <source src={`/api/beats/stream/${this.props.beat.file}`}/>
        </audio>
        {button}
      </div>
    )
  }
}

export default ProfileBeatsIndexItem