import React, { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import Ideas from "./Ideas";

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

  render() {
    return (
      <main className="App">
        <GlobalStyles />
        <h1>IDEABOX</h1>
        <Ideas ideas={this.state.ideas} />
      </main>
    );
  }
}

export default App;
