import React, { Component } from "react";
import { moviesRef } from "../utils/firebase";

class App extends Component {
  state = {
    movies: []
  };

  componentWillMount() {
    moviesRef.on("value", dataSnapShot => {
      // console.timeEnd('-- TitleDrop Time --');

      var movies = dataSnapShot.val();
      console.log("Got the movies");
      console.log(movies);
      this.setState({ movies });
    });
  }

  render() {
    return (
      <pre>
        <code>
          {JSON.stringify(this.state.movies, null, 4)}
        </code>
      </pre>
    );
  }
}

export default App;
