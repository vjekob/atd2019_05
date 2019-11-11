import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Counter } from "./Counter";
import { store } from "./redux/store";
import { TodoControl } from "./TodoControl";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <TodoControl />
      </Provider>
    );
  }
}

export default App;
