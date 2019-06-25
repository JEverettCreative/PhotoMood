import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
       <div>
         
         <Wrapper>
           <Route exact path="/" component={Landing} />
               {/* <Route exact path="/about" component={About} />
               <Route exact path="/discover" component={Discover} /> */}

         </Wrapper>
       </div>

     </Router>
    );
  }
}

export default App;
