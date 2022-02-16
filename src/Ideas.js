import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Ideas = ({ ideas }) => {
  return (
    <IdeasContainer>
      <Card />
      <Card />
      <Card />
    </IdeasContainer>
  )
}

const IdeasContainer = styled.section`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export default Ideas;