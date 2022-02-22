import React from "react";
import styled from "styled-components/macro";

const Card = ({ id, title, description, deleteIdea }) => {
  return (
    <CardWrapper>
      <Idea>
        <h3>{title}</h3>
        <p>{description}</p>
        <TrashButton onClick={() => deleteIdea(id)}>🗑</TrashButton>
      </Idea>
    </CardWrapper>
  );
}

const Idea = styled.div`
  font-family: 'Manrope';
  height: 100%;
  background-color: hsl(210deg, 100%, 90%);
  padding: 10px;
  text-align: center;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CardWrapper = styled.div`
  overflow: hidden;
  border: 3px solid darkblue;
  border-radius: 10px;
  transition: transform 300ms;

  &:hover {
    transform: translate(5px, -5px);
  }
`;

const TrashButton = styled.button`
  width: 30px;
  background-color: white;
  border-radius: 5px;
  transition: transform 300ms;

  &:hover {
    transform: scale(1.2) rotate(1turn);
  }
`;

export default Card;