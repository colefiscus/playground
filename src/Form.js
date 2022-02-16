import React, { Component } from "react";
import styled from "styled-components";

class Form extends Component() {
  constructor() {
    super()
    this.state = {
      title: "",
      description: ""
    }
  }

  render() {
    return (
      <FormWrapper>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.title}
        />


        <Input
          type="text"
          placeholder="Description"
          name="description"
          value={this.state.description}
        />

        <Button>SUBMIT</Button>
      </form>
    )
  }
}

const FormWrapper = styled.form`
  margin: auto;
`;

const Input = styled.input`
  margin: 5px;
  width: 30%;
  border: 2px solid black;
  font-size: 1rem;
`;

const Button = styled(Input)`
  background-color: lightblue;
`

export default Form;