import ArchiveItem from "./components/ArchiveItem";
import ChangeItem from "./components/ChangeItem";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";


class App extends React.Component<{}, {}> {

  public render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Login} />
        <Route path="/change/" component={ChangeItem} />
        <Route path="/archive/" component={ArchiveItem} />
      </Router>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById("app"),
);
