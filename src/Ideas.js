import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Ideas = ({ ideas }) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        id={idea.id}
        title={idea.title}
        description={idea.description}
        key={idea.id}
      />
    )
  })

  return (
    <IdeasContainer>
      {ideaCards}
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