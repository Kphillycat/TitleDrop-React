import React, { PureComponent } from "react";

class MovieCard extends PureComponent {
  render() {
    return (
      <div data-testid="movie-card">
        <h3>Title: {this.props.title}</h3>
        <div>Time: {this.props.time}</div>
      </div>
    );
  }
}

export default MovieCard;
