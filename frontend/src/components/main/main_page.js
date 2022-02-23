import React from 'react';
import { Link } from 'react-router-dom'
import * as navbarcss from '../nav/navbar.css'
class MainPage extends React.Component {

  render() {
    return (
    <div className="general-form">
      <div className="creators-info">
        <span className="github-logo">
            <span className="github-logo-pic">
              <a href="https://github.com/zackalsiday" target="_blank"><img id="github-logo-1" src={require('../../images/github-icon-png-29.jpg.png')} /></a>
            </span>
          <br/>
            <span className="github-logo-pic">
              <a href="https://github.com/efremporter" target="_blank"><img id="github-logo-2" src={require('../../images/github-icon-png-29.jpg.png')} /></a>
            </span>
          <br/>
            <span className="github-logo-pic" >
              <a href={"https://github.com/hellodanielbai"} target="_blank"> <img id="github-logo-3" src={require('../../images/github-icon-png-29.jpg.png')} /> </a>
            </span>
        </span>
        <span className="linkedin-logo">
            <a href={"https://www.linkedin.com/in/zack-alsiday-061598210/"} target="_blank"><img id="linkedin-logo-1" src={require('../../images/375-3755097_join-the-conversation-linkedin-logo-white-png-transparent.png')} /></a>
          <br />
            <a href={"https://www.linkedin.com/in/efrem-porter-550b0b224/"} target="_blank"><img id="linkedin-logo-2" src={require('../../images/375-3755097_join-the-conversation-linkedin-logo-white-png-transparent.png')} /></a>
          <br />
            <a href={"https://www.linkedin.com/in/daniel-bai-227826b2/"} target="_blank"><img id="linkedin-logo-3" src={require('../../images/375-3755097_join-the-conversation-linkedin-logo-white-png-transparent.png')} /></a>
        </span>
        <span className="names">
          <p id="Zack-Alsiday">Zack Alsiday</p>
          {/* <br /> */}
          <p id="Efrem-Porter"> Efrem Porter</p>
          {/* <br /> */}
          <p id="Daniel-Bai"> Daniel Bai</p>
        </span>
        <span className="email-address">
          <p id="Zack-Alsiday-ad">alsidayzack@gmail.com</p>
          {/* <br /> */}
          <p id="Efrem-Porter-ad">eopiscool@gmail.com</p>
          {/* <br /> */}
          <p id="Daniel-Bai-ad"> danielbai@gmail.com</p>
        </span>
      </div>
        <p className="summary">Welcome to <span id="t">ColLab</span>. A music platform where artists can create and share music together.
        Check out beats on the feed or post your own. You can also post remixes or your own take on posted beats. An interactive space to be creative and to bounce ideas. So what are you waiting for? Start collabing!

      </p>
      <div className='login-signup-but-container'>
        <div className='login-but-container' >
          <Link className='login-but' to={'/login'} style={{ textDecoration: 'none' }}><button className="login-but-text" >LOGIN</button></Link>
        </div>
        <div className='gap'>hi</div>
        <div className='login-but-container'>
          <button className="guest-user-but" onClick={this.props.logInGuestUser}>Guest User</button>
        </div>
        <div className='gap'>hi</div>
        <div className='signup-but-container'>
          <Link className='signup-but' to={'/signup'} style={{ textDecoration: 'none' }}><button className="signup-but-text" >SIGNUP</button></Link>
        </div>
      </div>
    </div> 
        );
    
  }
}

export default MainPage;