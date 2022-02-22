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
        {id: 3, title: "Make 30 minute work mode", description: "Figure out way to mmore consistently stand up at desk, take breaks, and increase productivity. Figure out way to mmore consistently stand up at desk, take breaks, and increase productivity. Figure out way to mmore consistently stand up at desk, take breaks, and increase productivity."},
        {id: 4, title: "Make biscuits", description: "Find a recipe for biscuits and then make them."},
        {id: 5, title: "Paint a picture", description: "Buy some painting things and then use them on a wall."},
        {id: 6, title: "Do yoga", description: "Create a yoga routine for cats, figure out how to train them."},
        {id: 7, title: "Go for a walk", description: "Create leash that can control 20 dogs at once. Create leash that can control 20 dogs at once. Create leash that can control 20 dogs at once. Create leash that can control 20 dogs at once. Create leash that can control 20 dogs at once."},
        {id: 8, title: "Sculpt a pot", description: "Invent method that makes a perfect pot every time."},
        {id: 9, title: "Do a workout", description: "Burn 700 calories in 15 minutes of exercise."},
        {id: 10, title: "Train Penny to not bite Cole", description: "Devise a method to prevent Penny (alternatively known as 'Peeny' during her manic states) from biting Cole. This is of the utmost priority as if this behavior is not changed soon, Cole will leave me and I'll never ever be happy again."},
        {id: 11, title: "Buy a cat", description: "Buy a very floofy boi."},
        {id: 12, title: "Buy a dog", description: "Buy a very good boi."}
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
        <Header>
          <h1>PLAYGROUND FUNTIME EXTRAVAGANZA</h1>
        </Header>
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && <h2>No ideas yet... Add some!</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
        <Footer></Footer>
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.main`
  text-align: center;
  isolation: isolate;
`;

const Header = styled.header`
  font-family: 'Manrope', sans-serif;
  position: sticky;
  top: 0px;
  width: 100%;
  border: 3px solid hsl(320deg, 100%, 70%);
  border-right: none;
  border-left: none;
  background-color: hsl(320deg, 80%, 80%);
  margin-bottom: 20px;
  display: grid;
  place-content: center;
  z-index: 1;
`;

const Footer = styled.footer`
  width: 100%;
  height: 30px;
  border: 3px solid green;
  border-right: none;
  border-left: none;
  background-color: hsl(120deg, 80%, 80%); 
`;

export default App;
