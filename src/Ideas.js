import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Ideas = ({ ideas }) => {
  return (
    <div className="ideasContainer">
      <h2>Ideas Go Here!</h2>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Ideas;