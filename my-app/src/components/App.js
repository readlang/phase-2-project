import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom"
// uses react-router-dom@5 (version 5) to use switch
import NavBar from "./NavBar"
import Home from "./Home"
import GoalPage from "./GoalPage"
  import GoalList from "./GoalList";
  import GoalAdd from "./GoalAdd";
import LogPage from "./LogPage";
import TrackingPage from "./TrackingPage"

function App() {
  // - this example Data is for testing purposes
  const exampleData = [
    {
      "title": "Get in Shape",
      "activity": "Lift weights",
      "minmax": "at least",
      "number": "3",
      "unit": "times",
      "interval": "per week",
      actions: []
    },
    {
      "title": "Running",
      "activity": "Run",
      "minmax": "at least",
      "number": "10",
      "unit": "miles",
      "interval": "per week",
      actions: []
    },
    {
      "title": "Nutrition",
      "activity": "Eat",
      "minmax": "at most",
      "number": "1",
      "unit": "snack",
      "interval": "per day",
      actions: []
    },
    {
      "title": "Sleep Health",
      "activity": "Sleep",
      "minmax": "at least",
      "number": "8",
      "unit": "hours",
      "interval": "per day",
      actions: []
    }
  ]

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/goalsDB")
    .then(r => r.json())
    .then(d => setData(d))
  }, [])

  const [newGoal, setNewGoal] = useState({
    title: "",
    activity: "",
    minmax: "at least",
    number: 1,
    unit: "",
    interval: "per day",
    actions: [],
  })

  const [newAction, setNewAction] = useState({
    dateTime: "",
    number: 1,
    notes: "",
  })

  function saveGoal() {   // - checks if newGoal is unique before saving
    const duplicate = data.some(goal => goal.title === newGoal.title)   
    duplicate ? alert("Please use a unique Goal Name") : setData([...data, newGoal])  
  }

  function saveAction(focusGoal) {
    const modGoal = {...focusGoal, actions: [...focusGoal.actions, newAction ]}
    
    setData( data.map(eachGoal=>( eachGoal.title === focusGoal.title ? modGoal : eachGoal )) )
    console.log("action saved")
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
          <Route path="/goals"> 
            <GoalPage >
              <GoalList data={data}  />
              <GoalAdd newGoal={newGoal} setNewGoal={setNewGoal} saveGoal={saveGoal} />
            </GoalPage> 
          </Route>
          <Route path="/log"> 
            <LogPage newAction={newAction} setNewAction={setNewAction} data={data} saveAction={saveAction} /> 
          </Route>
          <Route path="/track"> <TrackingPage /> </Route>
        </Switch>
      </div>     
    </div>
  );
}

export default App;