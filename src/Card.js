import React from "react";
import styled from "styled-components/macro";

const Card = ({ id, title, description, deleteIdea }) => {
  return (
    <BigCardWrapper>
      <CardWrapper>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => deleteIdea(id)}>🗑</button>
      </CardWrapper>
    </BigCardWrapper>
  );
}

const CardWrapper = styled.div`
  height: 100%;
  background-color: hsl(210deg, 100%, 90%);
  padding: 10px;
  text-align: center;
  overflow: auto;
`;

const BigCardWrapper = styled.div`
  overflow: hidden;
  border: 3px solid darkblue;
  border-radius: 10px;
`;

export default Card;