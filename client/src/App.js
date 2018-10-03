import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
