import React from 'react';
import { Link } from 'react-router-dom'
import * as navbarcss from './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="drop-down-menu">
              <button className='drop-down-menu-bt'>Menu</button>
              <div className='dropdown-content'>
                <Link className='db-item' to={`/profile/${this.props.currentUser.id}`} style={{ textDecoration: 'none' }} >PROFILE</Link>
                <Link className='db-item' to={'/feed'} style={{ textDecoration: 'none' }} >FEED</Link> 
                <button className='db-item' id='logout-bt' onClick={this.logoutUser}>LOGOUT</button>
              </div>
            </div>
        );
      } else {
              return null 
      }
  }

  render() {
      return (
      <div className="splash-body">
        <div className='header'>
            {/* <div className="welcome-title"><img id="logo" src={require('../../images/collab-2.png')} /></div> */}
            <br/>
            {this.getLinks()}
        </div>
      </div>

      );
  }
}

export default NavBar;

{/* <div>

  <div className='splash-title'>ColLab</div>
  
</div> */}