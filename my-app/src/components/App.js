import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom"
// uses react-router-dom@5 (version 5) to use switch
import NavBar from "./NavBar"
import Home from "./Home"
import GoalPage from "./GoalPage"
import LoggingPage from "./LoggingPage";
import TrackingPage from "./TrackingPage"

function App() {
  const [data, setData] = useState([])

  const [newGoal, setNewGoal] = useState({
    title: "",
    activity: "",
    minmax: "",
    number: 1,
    unit: "",
    interval: "",
    actions: [],
  })

  function saveGoal() {
    setData([...data, newGoal])
    console.log("saved")
  }

  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <div className='App-body'>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/goals"> <GoalPage newGoal={newGoal} setNewGoal={setNewGoal} saveGoal={saveGoal} data={data} /> </Route>
          <Route path="/log"> <LoggingPage /> </Route>
          <Route path="/track"> <TrackingPage /> </Route>
        </Switch>
      </div>     
    </div>
  );
}

export default App;