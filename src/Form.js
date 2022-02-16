import React, { Component } from "react";
import styled from "styled-components/macro";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: ""
    }
  }

  submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description
    }
    this.props.addIdea(newIdea);
    this.clearInputs();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  clearInputs = () => {
    this.setState({ title: "", description: "" })
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

        <Button onClick={(event) => this.submitIdea(event)}>SUBMIT</Button>
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

const Button = styled.button`
  margin: 5px;
  width: 30%;
  border: 2px solid black;
  font-size: 1rem;
  background-color: lightgoldenrodyellow;
`;

export default Form;