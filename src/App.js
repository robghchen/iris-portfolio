import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Work from "./containers/Work";
import Resume from "./containers/Resume";
import About from "./containers/About";
import Contact from "./containers/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Work} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
