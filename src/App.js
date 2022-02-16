import React, { Component } from "react";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import Ideas from "./Ideas";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        {id: 1, title: "Plan nighttime routine", description: "Write out series of 5 or more tasks to complete every night to signify it's time for bed."},
        {id: 2, title: "Import Spotify playlists", description: "Go to TIDAL's website to start the import process of Spotify playlists to TIDAL."},
        {id: 3, title: "Make 30 minute work mode", description: "Figure out way to mmore consistently stand up at desk, take breaks, and increase productivity."},
      ],
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }
  
  deleteIdea = (oldIdeaID) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== oldIdeaID);
    this.setState({ ideas: filteredIdeas });
  }

  render() {
    return (
      <MainWrapper>
        <GlobalStyles />
        <h1>IDEABOX</h1>
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && <h2>No ideas yet... Add some!</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.main`
  text-align: center;
  padding: 30px;
`;

export default App;
