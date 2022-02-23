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
  font-size: calc(12/16 * 1rem);
  background: hsl(340deg 100% 32%);  
  padding: 0;
  border: none;
  border-radius: 12px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    
  }
`;

const DeleteButton = styled.span`
  display: block;
  padding: 12px 22px;
  font-family: 'Manrope', sans-serif;
  background-color: hsl(345deg, 100%, 47%);
  color: white;
  border-radius: 12px;
  transform: translateY(-4px);

  &:hover {
    
  }
`;

export default Card;