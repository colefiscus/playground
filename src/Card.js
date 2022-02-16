import React from "react";
import styled from "styled-components";

const Card = ({ id, title, description }) => {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>🗑</button>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 3px solid black;
  padding: 10px;
  text-align: center;
`;

export default Card;