import "./App.css";
import React from "react";
import Home from "./components/home/Home";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SideBar from "./components/layout/SideBar";
import StorieFeedItem from "./components/stories/StorieFeedItem";
import { UiContextProvider } from "./context/UiContext";
import Login from "./components/login/Login";
import { useState } from "react";
import Profile from "./components/profile/Profile";
import Checkins from "./components/profile/Checkins";
import Description from "./components/profile/Description";
import Photos from "./components/profile/Photos";
import Evaluations from "./components/profile/Evaluations";
import DashBoard from "./components/profile/DashBoard";
import Chat from "./components/chat/Chat";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const [pathname, setPathname] = useState(window.location.pathname);

  return (
   

    <div>
      {loggedIn ? (
        <div className="feeds-page">
          <Router>

         
          <SideBar />
          <div class="feeds-page-content container">
            <Navbar pathname={pathname} />
            <Chat/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/profile/" component={Profile}/>
                <Route exact  path="/profile/photos" component={Profile} />
                <Route exact  path="/profile/checkins" component={Profile} />
                <Route exact  path="/profile/checkins/location" component={Profile} />
                <Route exact  path="/profile/evaluations" component={Profile} />
                <Route exact  path="/profile/dashboard" component={Profile} />
                 
                    
                  
             
              </Switch>
            {/* <Router>
              
            </Router> */}
          </div>
          </Router>
        </div>
      ) : (
        <></>
      )}
      {!loggedIn ? (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route  path="/" component={Login} />
          </Switch>
        </Router>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
