import React from 'react';
import { withRouter } from 'react-router-dom';
import * as signupcss from './signup-login.css'

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
    
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div className="input-elements">
            <div className='form-title'>CREATE AN ACCOUNT</div>
            <hr/>
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
            <input className='form-but' type="submit" value="▶" />
            {this.renderErrors()}
          </div>
        </form>
      
    );
  }
}

export default withRouter(SignupForm);