import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { View } from "./components/view/View";
import { Counter } from "./Counter";

class App extends Component {
  render() {
    return (
      // <View />
      <Counter/>
    );
  }
}

export default hot(module)(App);
