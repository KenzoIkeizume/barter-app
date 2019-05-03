import Layout from "./components/Layout/Layout";

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import Login from "./components/Login/Login";

class App extends React.Component<{}, {}> {

  public render() {
    return (
      <Login />
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById("app"),
);
