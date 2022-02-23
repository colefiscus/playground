import React from "react";
import styled from "styled-components/macro";

const Card = ({ id, title, description, deleteIdea }) => {

  const [mostRecentAction, setMostRecentAction] = React.useState(null);

  let styles = {};

  if (mostRecentAction === "hovering") {
    styles = {
      transform: "translateY(-6px)",
      transition: "transform 150ms",
    }
  } else if (mostRecentAction === "depressed") {
    styles = {
      transform: "translateY(-2px)",
      transition: "transform 50ms",
    }
  } else if (mostRecentAction === "released") {
    styles = {
      transform: "translateY(-6px)",
      transition: "transform 200ms",
    }
  } else {
    styles = {
      transform: "translateY(-4px)",
      transition: "transform 600ms",
    }
  }

  return (
    <CardWrapper>
      <Idea>
        <h3>{title}</h3>
        <p>{description}</p>
        <DeleteButtonWrapper onClick={() => deleteIdea(id)}>
          <DeleteButton
            style={styles}
            onMouseEnter={() => setMostRecentAction("hovering")}
            onMouseDown={() => setMostRecentAction("depressed")}
            onMouseUp={() => setMostRecentAction("released")}
            onMouseLeave={() => setMostRecentAction("exited")}
          >
            Delete
          </DeleteButton>
        </DeleteButtonWrapper>
      </Idea>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  overflow: hidden;
  border: 3px solid darkblue;
  border-radius: 10px;
  transition: transform 300ms;
`;

const Idea = styled.div`
  font-family: 'Manrope';
  width: 100%;
  height: 100%;
  background-color: hsl(210deg, 100%, 90%);
  padding: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const DeleteButtonWrapper = styled.button`
  font-size: calc(12/16 * 1rem);
  background: hsl(340deg 100% 32%);  
  padding: 0;
  /* margin-top: 12px; */
  border: none;
  border-radius: 12px;
  line-height: 1;
  cursor: pointer;
  transition: filter 600ms;

  &:hover {
    filter: brightness(105%);
    transition: filter 150ms;
  }
`;

const DeleteButton = styled.span`
  display: block;
  padding: 12px 22px;
  font-family: 'Manrope', sans-serif;
  background-color: hsl(345deg, 100%, 47%);
  color: white;
  border-radius: 12px;
`;

export default Card;