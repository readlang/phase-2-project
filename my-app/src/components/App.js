import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom"
// uses react-router-dom@5 (version 5) to use switch
import NavBar from "./NavBar"
import Home from "./Home"
import GoalPage from "./GoalPage"
import LogPage from "./LogPage";
import TrackingPage from "./TrackingPage"

function App() {
  const [data, setData] = useState([])

  const [newGoal, setNewGoal] = useState({
    title: "",
    activity: "",
    minmax: "at least",
    number: 1,
    unit: "",
    interval: "per day",
    actions: [],
  })

  function saveGoal() {
    const duplicate = data.some(goal => goal.title === newGoal.title)
    duplicate ? alert("Please use a unique Goal Name") : setData([...data, newGoal])
  }

  console.log("data", data)
  

  return (
    <div id="App">
      <header id="App-header">
        <NavBar />
      </header>

      <div id='App-body'>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/goals"> <GoalPage newGoal={newGoal} setNewGoal={setNewGoal} saveGoal={saveGoal} data={data} /> </Route>
          <Route path="/log"> <LogPage data={data}/> </Route>
          <Route path="/track"> <TrackingPage /> </Route>
        </Switch>
      </div>     
    </div>
  );
}

export default App;