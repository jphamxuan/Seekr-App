import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import Profile from "./pages/profile"
import EditProfile from "./pages/editProfile"
import Landing from "./pages/landing/landing"
import Feed from "./pages/feed/feed";
import NewUser from "./pages/newUser/newUser"
import Login from './pages/login/login'
import TrailSearch from './pages/search/search'
import Achievements from './pages/achievements/achievements'
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          
          <Route exact path="/" component= {Landing}/>
          <Route exact path="/feed" component= {Feed}/>
          <Route exact path="/newUser" component= {NewUser}/>
          <Route exact path="/login" component= {Login}/>
          <Route exact path="/profile" component= {Profile}/>
          <Route exact path="/editProfile" component= {EditProfile}/>
          <Route exact path="/search" component = {TrailSearch}/>
          <Route exact path="/achievements" component = {Achievements}/>
          
        </Fragment>

      </Router>

  );
  }
  }

        
        
      

export default App;
