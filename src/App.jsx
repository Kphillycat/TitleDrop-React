import React, { Component } from "react";
import MovieCard from "./MovieCard";
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
          : Object.keys(movies).map(key => (
              <MovieCard
                key={movies[key].title}
                title={movies[key].title}
                time={movies[key].time}
              />
            ))}
      </div>
    );
  }
}

export default App;
