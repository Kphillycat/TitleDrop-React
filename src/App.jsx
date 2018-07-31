import React, { Component } from "react";
import styled from "styled-components";
import { moviesRef, auth } from "../utils/firebase";
import narutoRun from "../naruto_run.gif";
import MovieCard from "./MovieCard";
import SignIn from "./SignIn";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

class App extends Component {
  state = {
    movies: [],
    loading: true,
    currentUser: null
  };

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
    console.time("-- TitleDrop Time --");

    moviesRef.on("value", dataSnapShot => {
      const movies = dataSnapShot.val();
      console.timeEnd("-- TitleDrop Time --");

      this.setState({ movies, loading: false });
    });
  }

  render() {
    const { movies, loading, currentUser } = this.state;
    return (
      <div>
        <h1>
          WHEN THEY SAY IT!!
        </h1>
        {!currentUser && <SignIn />}
        {currentUser && <h3> {currentUser.displayName} </h3>}
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
