import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Comment from "./componets/Comment/Comment";
import Footer from "./componets/Footer/Footer";
import Home from "./componets/Home/Home";
import Post from "./componets/Post/Post";
import WebNav from "./componets/Webnav/WebNav";

function App() {
  return <>
  <Router>
  <WebNav/>
 
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/post" component={Post}/>
      <Route exact path="/post/:id" component={Comment}/>
      <Route exact path="*" component={Home}/>

    </Switch>
    <Footer/>
  </Router>
  </>;
}

export default App;
