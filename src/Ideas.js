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
  padding: 20px;
  display: grid;
  /* grid-auto-flow: column; ~~ Add column-based flow ~~ */
  justify-content: space-evenly;
  align-items: start;
  grid-template-columns: repeat(3, 300px);
  /* grid-template-columns: 300px 300px 300px; ~~ Pixel-based columns ~~ */
  /* grid-template-columns: 20% 50% 30%; ~~ Percentage-based columns ~~ */
  grid-template-rows: repeat(3, 1fr);
  gap: 20px 40px;
`;

export default Ideas;