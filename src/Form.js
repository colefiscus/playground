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
    if (newIdea.title && newIdea.description) {
      this.props.addIdea(newIdea);
      this.clearInputs();
    } else {
      alert("Please fill in both fields");
    }
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
        <InputWrapper>
          <Label htmlFor="title">Title:</Label>
          <TitleInput
            type="text"
            placeholder="Yoga for cats"
            name="title"
            value={this.state.title}
            onChange={event => this.handleChange(event)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="description">Description:</Label>
          <DescriptionInput
            type="text"
            placeholder="A 30 min lesson designed for cats and kittens."
            name="description"
            value={this.state.description}
            onChange={event => this.handleChange(event)}
          />
        </InputWrapper>

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

const InputWrapper = styled.div`
  display: flex;
  width: 38%;
  gap: 5px;
`;

const Label = styled.label`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 100%;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1rem;
  padding-left: 8px;
  font-weight: 700;
  outline-color: deepskyblue;

  &:hover::placeholder {
    color: hsl(0deg, 0%, 40%);
  }

  &::placeholder {
    color: hsl(0deg, 0%, 60%);
    font-weight: 300;
  }
`;

const DescriptionInput = styled(TitleInput)`
  width: 100%;
`;

const Button = styled.button`
  width: 20%;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1rem;
  background-color: lightgoldenrodyellow;
  outline-color: deepskyblue;
`;

export default Form;