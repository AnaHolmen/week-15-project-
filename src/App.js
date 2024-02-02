import "./App.css";
import React, { Component } from "react";
import { HousesList } from "./Components/HousesList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
      </div>
    );
  }
}
export default App;
