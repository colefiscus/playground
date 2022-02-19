import React from "react";
import styled from "styled-components/macro";

const Card = ({ id, title, description, deleteIdea }) => {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 3px solid darkblue;
  border-radius: 5px;
  background-color: hsl(210deg, 100%, 90%);
  padding: 10px;
  text-align: center;
  overflow: auto;
`;

export default Card;