import React, { Component } from "react";
import { connect } from "react-redux";

class MovieList extends Component {
  renderMovie(movieData) {
    const title = movieData.results[0].title;
    return (
      <div key={title}>
        <h1> Title : {title} </h1>
        <hr />
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            movieData.results[0].poster_path
          }`}
          alt="someimage"
        />
        <br />
        <hr />
        <h6> Overview: {movieData.results[0].overview} </h6>
        <hr />
        <h6> Release Date: {movieData.results[0].release_date} </h6>
        <hr />
        <h6> Average Ratings: {movieData.results[0].vote_average} </h6>
        <hr />
      </div>
    );
  }
  render() {
    return <div>{this.props.movie.map(this.renderMovie)}</div>;
  }
}
//(state) -> movie:state.movie -> movie:movie
function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps)(MovieList);
