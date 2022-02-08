import React from 'react';
import { Link } from 'react-router-dom'
import navbar from './navbar.css'
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
            <div id='login-signup-but'>
                <div id='login-but' >
              <button><Link to={'/login'} style={{ textDecoration: 'none' }}>Login</Link></button>
                </div>
                <div id='signup-but'>
              <button><Link to={'/signup'} style={{ textDecoration: 'none' }}>Signup</Link></button>
                </div>
               
            </div>
        );
      }
  }

  render() {
      return (
      <div className="splash-body">
        <div className='header'>
            <div className="title">Welcome to ColLab</div>
         
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