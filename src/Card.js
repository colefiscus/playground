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
  border: 3px solid black;
  padding: 10px;
  text-align: center;
`;

export default Card;