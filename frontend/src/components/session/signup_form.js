import React from 'react';
import { withRouter } from 'react-router-dom';
import * as signupcss from './signup-login.css'
import { Link } from 'react-router-dom'
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className='llogin-signup-but-container'>
          <div className='login-but-container' >
            <Link className='login-but' to={'/login'} style={{ textDecoration: 'none' }}><button className="login-but-text" >LOGIN</button></Link>
          </div>
          <div className='signup-but-container'>
            <Link className='signup-but' to={'/signup'} style={{ textDecoration: 'none' }}><button className="signup-but-text" >SIGNUP</button></Link>
          </div>
        </div>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div className="input-elements">
            <div className='form-title-signup' >CREATE AN ACCOUNT</div>
            {/* <hr/> */}
            <br/>
            <div className='email-bar'>EMAIL
                <input 
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="▶"
                />
            </div>
            <br/>
            <div className="username-bar">USERNAME
                <input type="text"
                  className="username-bar"
                  value={this.state.handle}
                  onChange={this.update('handle')}
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
            <div className="password-bar">CONFIRM PASSWORD 
                <input 
                  type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="▶"
                />
            </div>
            <br/>
            <div className="submit-bar">
            <input className='form-but' type="submit" value="SUBMIT" />
            </div> 
            {this.renderErrors()}
          </div>
        </form>
        <div className="creators-info">
          <span className="github-logo">
            <span className="github-logo-pic">
              <a href="https://github.com/zackalsiday" target="_blank"><img id="github-logo-1" src={require('../../images/github-icon-png-29.jpg.png')} /></a>
            </span>
            <br />
            <span className="github-logo-pic">
              <a href="https://github.com/efremporter" target="_blank"><img id="github-logo-2" src={require('../../images/github-icon-png-29.jpg.png')} /></a>
            </span>
            <br />
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
          <span className="email-logo">
            <img id="email-logo-1" src={require('../../images/Daco_3269642.png')} />
            <br />
            <img id="email-logo-2" src={require('../../images/Daco_3269642.png')} />
            <br />
            <img id="email-logo-3" src={require('../../images/Daco_3269642.png')} />
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
      </div>
    );
  }
}

export default withRouter(SignupForm);