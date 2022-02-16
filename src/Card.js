import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <CardWrapper>
      <h3>Card!</h3>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 3px solid black;
  padding: 10px;
  text-align: center;
`;

export default Card;