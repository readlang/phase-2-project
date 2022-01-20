import React from 'react';
import { Switch, Route } from "react-router-dom"

import NavBar from "./NavBar"
import Home from "./Home"
import GoalPage from "./GoalPage"
import ActionPage from "./ActionPage";
import TrackingPage from "./TrackingPage"

function App() {
  return (
    
    <div className="App">
    
      <header className="App-header">
      <NavBar />
        
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/goals"> <GoalPage /> </Route>
          <Route path="/actions"> <ActionPage /> </Route>
          <Route path="/tracking"> <TrackingPage /> </Route>
        </Switch>
                
      </header>
    </div>
  );
}

export default App;