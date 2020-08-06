import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/Portfolio" component={Portfolio}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/" component={About}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
