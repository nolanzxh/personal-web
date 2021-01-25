import './App.css';
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import React from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Menu isOn={location.pathname}></Menu>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/resume" component={Resume} exact />
          <Route path="/skill" component={Skill} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/" render={() => (<Redirect to='/home' />)} />
        </Switch>
      </AnimatePresence>
    </div>

  );
}

export default App;
