import React, { Component } from "react";
import styled from "styled-components/macro";

class Form extends Component() {
  constructor() {
    super()
    this.state = {
      title: "",
      description: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <FormWrapper>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />


        <Input
          type="text"
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <Button>SUBMIT</Button>
      </FormWrapper>
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