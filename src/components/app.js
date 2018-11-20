import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import MovieList from "../containers/movie_list";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";

export class App extends Component {
  render() {
    const isLoggedIn = !this.props.isLoginSuccess;
    let app;

    if (!isLoggedIn) {
      app = (
        <div id="parent_div">
          <nav className="navbar">
            <a className="navbar-brand" href="#">
              Movie Info App
            </a>
          </nav>
          <br />
          <SearchBar />
          <br />
          <MovieList />
        </div>
      );
    } else {
      app = <LoginForm />;
    }

    return <div>{app}</div>;
  }
}

function mapStateToProps(state) {
  return {
    isLoginSuccess: state.auth.isLoginSuccess
  };
}

export default connect(
  mapStateToProps,
  {}
)(App);
