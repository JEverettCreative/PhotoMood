import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import UserHome from "./pages/UserHome";
import Wrapper from "./components/Wrapper";
import "./App.css";
import CreateProject from "./pages/CreateProject";
import SourceCategory from "./pages/SourceCategory";

class App extends Component {
  render() {
    return (
      <Router>
       <div>
         
         <Wrapper>
           <Route exact path="/" component={Landing} />
           <Route exact path="/userhome" component={UserHome} />
           <Route exact path="/createproject" component={CreateProject} />
           <Route exact path="/sourcecategory" component={SourceCategory} />

         </Wrapper>
       </div>

     </Router>
    );
  }
}

export default App;
