import "./App.css";
import Home from "./components/home/Home";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SideBar from "./components/layout/SideBar";
import StorieFeedItem from "./components/stories/StorieFeedItem";
import { UiContextProvider } from "./context/UiContext";
import Login from "./components/login/Login";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
   
    // <div className="feeds-page">
    //   {loggedIn?<SideBar />:<></>}
      
    //   <div class="feeds-page-content container">
    //   {loggedIn?<Navbar />:<></>}
        
    //       <Router>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/login" component={Login} />
    //       {/* <Route exact path="/stories" component={StorieFeedItem} /> */}
    //     </Switch>
    //   </Router>
    // </div>
   
    //   </div>

   <div>
     {loggedIn?<div className="feeds-page">
     <SideBar />
     <div class="feeds-page-content container">
     <Navbar />
            <Router>
         <Switch>
           <Route exact path="/" component={Home} />
           
         </Switch>
       </Router>
     </div>
     </div>:<></>}
     {
       !loggedIn?  <Router>
       <Switch>
        
         <Route exact path="/login" component={Login} />
       </Switch>
     </Router>
     :<></>}
   </div>
     

     
  );
}

export default App;
