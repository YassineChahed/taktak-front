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

function App() {
  return (
    <div className="feeds-page">
      <SideBar />
      <div class="feeds-page-content container">
        <Navbar />
          <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/stories" component={StorieFeedItem} /> */}
        </Switch>
      </Router>
    </div>
   
      </div>

     
  );
}

export default App;
