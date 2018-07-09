import React, { Component } from "react";
import moviesRef from "../utils/firebase";
import narutoRun from "../naruto_run.gif";

class App extends Component {
  state = {
    movies: [],
    loading: true
  };

  componentWillMount() {
    console.time("-- TitleDrop Time --");

    moviesRef.on("value", dataSnapShot => {
      const movies = dataSnapShot.val();
      console.timeEnd("-- TitleDrop Time --");

      console.log("Got the movies");
      console.log(movies);
      this.setState({ movies, loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        {loading
          ? <img src={narutoRun} />
          : <pre>
              <code>
                {JSON.stringify(movies, null, 4)}
              </code>
            </pre>}
      </div>
    );
  }
}

export default App;
