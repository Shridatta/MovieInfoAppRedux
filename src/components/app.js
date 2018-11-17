import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import MovieList from "../containers/movie_list";
export default class App extends Component {
  render() {
    return (
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
  }
}
