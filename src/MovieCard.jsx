import React, { PureComponent } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: linear-gradient(#ca8989, #2f3cd0);
  text-align: center;
  padding: 1rem;
`;
const Title = styled.div`
  margin-bottom: 1rem;
  font-weight: bold;
`;

class MovieCard extends PureComponent {
  render() {
    const { title, time } = this.props;
    return (
      <Card data-testid="movie-card">
        <Title>
          {title}
        </Title>
        <div>
          {time}
        </div>
      </Card>
    );
  }
}

export default MovieCard;
