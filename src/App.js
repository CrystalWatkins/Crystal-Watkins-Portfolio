import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
