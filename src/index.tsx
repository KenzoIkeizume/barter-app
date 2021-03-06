import ArchiveItem from "./components/AchiveItem/ArchiveItem";
import ChangeItem from "./components/ChangeItem/ChangeItem";
import ListItem from "./components/ListItem/ListItem";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";

class App extends React.Component<{}, {}> {

  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/change/" component={ChangeItem} />
          <Route path="/archive/" component={ArchiveItem} />
          <Route path="/list_item/" component={ListItem} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById("app"),
);
