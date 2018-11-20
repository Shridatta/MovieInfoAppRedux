import React, { Component } from "react";
import { login } from "../reducers/reducer_login";
import { connect } from "react-redux";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, LoginError } = this.props;
    return (
      <div className="login-form-wrapper" onSubmit={this.onSubmit}>
        <form name="loginForm" className="login">
          <h1 className="login-title">User Login</h1>
          <input
            type="text"
            name="email"
            className="login-input"
            placeholder="Username"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          <input type="submit" value="login" className="login-button" />
          {isLoginPending && <div>Please wait..</div>}
          {isLoginSuccess && <div>Welcome back!</div>}
          {LoginError && <div>{LoginError.message}</div>}
        </form>
      </div>
    );
  }

  onSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
  };
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.auth.isLoginPending,
    isLoginSuccess: state.auth.isLoginSuccess,
    LoginError: state.auth.LoginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
