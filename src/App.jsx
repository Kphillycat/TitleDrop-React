import React, { Component } from "react";
import styled from "styled-components";
import moviesRef from "../utils/firebase";
import narutoRun from "../naruto_run.gif";
import MovieCard from "./MovieCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

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

      this.setState({ movies, loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        <h1>
          WHEN THEY SAY IT!!
        </h1>
        <Container>
          {loading
            ? <img alt="Loading the movies" src={narutoRun} />
            : Object.keys(movies).map(key => (
                <MovieCard
                  key={movies[key].title}
                  title={movies[key].title}
                  time={movies[key].time}
                />
              ))}
        </Container>
      </div>
    );
  }
}

export default App;
