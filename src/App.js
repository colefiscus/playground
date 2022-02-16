import React, { Component } from "react";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [],
    }
  }

  render() {
    return (
      <main className="App">
        <GlobalStyles />
        <h1>IDEABOX</h1>
        <p>Hello there!</p>
      </main>
    );
  }
}

export default App;
