import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";
import MovieCard from "../src/MovieCard";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("Should render MovieCard", () => {
  const movieProps = { title: "Test", time: "00:00:00" };
  const { container, getByTestId } = render(
    <MovieCard title={movieProps.title} time={movieProps.time} />
  );

  expect(getByTestId("movie-card")).toHaveTextContent(movieProps.title);
  expect(container.firstChild).toMatchSnapshot();
});
