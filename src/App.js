import React from "react";
import "./css/tailwind.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Landing from "./components/Landing";
import Providing from "./components/providing";
import Categorie from "./components/Categorie";
import Popular from "./components/components/Popular";

const App = () => (
  <Router>
    <Header />
    <Landing />
    <Providing />
    <Categorie />
    <Popular />

    <Switch>
      <Route exact path="/">
        {/*<Home />*/}
      </Route>
    </Switch>
  </Router>
);

export default App;
