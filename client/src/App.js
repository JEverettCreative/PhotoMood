import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import UserHome from "./pages/UserHome";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
       <div>
         
         <Wrapper>
           <Route exact path="/" component={Landing} />
           <Route exact path="/userhome" component={UserHome} />
               {/* <Route exact path="/about" component={About} />
               <Route exact path="/discover" component={Discover} /> */}

         </Wrapper>
       </div>

     </Router>
    );
  }
}

export default App;
