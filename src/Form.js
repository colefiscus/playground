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
        <TitleInput
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <DescriptionInput
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 40px;
`;

const TitleInput = styled.input`
  /* margin: 5px; */
  width: 20%;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1rem;
  padding-left: 8px;
`;

const DescriptionInput = styled(TitleInput)`
  width: 55%;
`;

const Button = styled.button`
  /* margin: 5px; */
  width: 20%;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1rem;
  background-color: lightgoldenrodyellow;
`;

export default Form;