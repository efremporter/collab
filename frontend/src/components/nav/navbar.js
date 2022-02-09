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
            <div>
                <Link to={'/feed'}>All Beats</Link>
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
              <div className="welcome-title">ColLab</div>
              <div className='login-signup-but-container'>
                <div className='login-but-container' >
                  <button className='login-but'><Link className="login-but-text" to={'/login'} style={{ textDecoration: 'none' }}>Login</Link></button>
                </div>
                <div className='signup-but-container'>
                  <button className='signup-but'><Link className="signup-but-text" to={'/signup'} style={{ textDecoration: 'none' }}>Signup</Link></button>
                </div>
              </div>
            </div>
        );
      }
  }

  render() {
      return (
      <div className="splash-body">
        <div className='header'>
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