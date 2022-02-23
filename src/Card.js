import React from "react";
import styled from "styled-components/macro";

const Card = ({ id, title, description, deleteIdea }) => {
  return (
    <CardWrapper>
      <Idea>
        <h3>{title}</h3>
        <p>{description}</p>
        <DeleteButtonWrapper onClick={() => deleteIdea(id)}>
          <DeleteButton>
            Delete
          </DeleteButton>
        </DeleteButtonWrapper>
      </Idea>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border: 3px solid darkblue;
  border-radius: 10px;
  transition: transform 300ms;

  &:hover {
    transform: scale(1.1);
    filter: brightness(110%);
  }
`;

const Idea = styled.div`
  position: relative;
  font-family: 'Manrope';
  width: 100%;
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

const DeleteButtonWrapper = styled.button`
  font-size: calc(14/16 * 1rem);
  width: fit-content;
  background-color: white;
  border-radius: 5px;
  transition: transform 300ms;

  &:hover {
    
  }
`;

const DeleteButton = styled.span`

`;

export default Card;