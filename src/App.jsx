import React, { Component } from "react";
import moviesRef from "../utils/firebase";

class App extends Component {
  state = {
    movies: []
  };

  componentWillMount() {
    console.time("-- TitleDrop Time --");

    moviesRef.on("value", dataSnapShot => {
      const movies = dataSnapShot.val();
      console.timeEnd("-- TitleDrop Time --");

      console.log("Got the movies");
      console.log(movies);
      this.setState({ movies });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <pre>
        <code>
          {JSON.stringify(movies, null, 4)}
        </code>
      </pre>
    );
  }
}

export default App;
