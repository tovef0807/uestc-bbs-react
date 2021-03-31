import React, { Component } from "react";
import BaseLayout from "./layout/BaseLayout";
import { HashRouter as Router } from "react-router-dom";
import "./App.less";

class App extends Component {
  render() {
    return (
      <Router>
        <BaseLayout />
      </Router>
    );
  }
}

export default App;
