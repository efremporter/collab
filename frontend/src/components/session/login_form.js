import React from 'react';
import { withRouter } from 'react-router-dom';
import * as logincss from './signup-login.css'
import { Link } from 'react-router-dom'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <div className="errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <div className="error" key={`error-${i}`}>
            {this.state.errors[error]}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="login-page">
        <div className="welcome-title"><img id="logo" src={require('../../images/collab-2.png')} /></div>
        <div className='llogin-signup-but-container'>
          <div className='login-but-container' >
            <Link className='login-but' to={'/login'} style={{ textDecoration: 'none' }}><button className="login-but-text" >LOGIN</button></Link>
          </div>
          <div className='gap'>hi</div>
          <div className='login-but-container'>
              <button className="guest-user-but" onClick={this.props.logInGuestUser} >Guest User</button>
          </div>
          <div className='gap'>hi</div>
          <div className='signup-but-container'>
            <Link className='signup-but' to={'/signup'} style={{ textDecoration: 'none' }}><button className="signup-but-text" >SIGNUP</button></Link>
          </div>
        </div>
        <div className="signup-form-1">
          <form className='signup-form' onSubmit={this.handleSubmit}>
            <div className='input-elements'>
              <div className='form-title-login'>LOGIN</div>
              <br/>
              <div className="email-bar">EMAIL
                  <input
                    className="email-bar"
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="▶"
                  />
              </div>
                <br/>
              <div className="password-bar">PASSWORD
                  <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="▶"
                  />
              </div>
                <br/>
              <input className='form-but' type="submit" value="SUBMIT" />
              
                {this.renderErrors()}
            </div>
          </form>
        </div>
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
         {/* <span className="email-logo">
           <img id="email-logo-1" src={require('../../images/Daco_3269642.png')} />
           <br />
           <img id="email-logo-2" src={require('../../images/Daco_3269642.png')} />
           <br />
           <img id="email-logo-3" src={require('../../images/Daco_3269642.png')} />
         </span> */}
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
      </div>
    );
  }
}

export default withRouter(LoginForm);