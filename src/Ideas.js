import React from "react";
import styled from "styled-components/macro";

import Card from "./Card";

const Ideas = ({ ideas, deleteIdea }) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        id={idea.id}
        title={idea.title}
        description={idea.description}
        deleteIdea={deleteIdea}
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
  padding: 20px 40px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(3, 200px);
  gap: 20px 40px;
`;

export default Ideas;