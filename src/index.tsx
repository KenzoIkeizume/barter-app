import Layout from "./components/Layout/Layout";

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";

class App extends React.Component<{}, {}> {

  public render() {
    return (
      <Layout />
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById("app"),
);
