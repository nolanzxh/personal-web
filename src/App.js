import './App.css';
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import React from "react";
import { AnimatePresence } from "framer-motion";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      isSmallScreen: false,
      showMenuBar: true
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    let smallSreen = (window.innerWidth < 900 || window.innerHeight < 520) ? true : false;
    this.setState({
      isSmallScreen: smallSreen,
      showMenuBar: !smallSreen
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(e) {
    let smallSreen = (e.target.innerWidth < 900 || e.target.innerHeight < 520) ? true : false;
    this.setState({
      isSmallScreen: smallSreen,
      showMenuBar: !smallSreen
    });
  }

  render() {
    const { location } = this.props;
    const { isSmallScreen } = this.state;
    return (
      <div className={`App ${isSmallScreen ? 'smallmode' : null}`}>
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
}

export default withRouter(App);
