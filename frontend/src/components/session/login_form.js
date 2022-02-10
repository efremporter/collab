import React from 'react';
import { withRouter } from 'react-router-dom';
import * as logincss from './signup-login.css'

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

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
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

      <form className='signup-form' onSubmit={this.handleSubmit}>
        <div className='input-elements'>
          <div className='form-title-login'>LOGIN</div>
          {/* <hr/> */}
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
      
    );
  }
}

export default withRouter(LoginForm);