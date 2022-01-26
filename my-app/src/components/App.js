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
import TrackingList from './TrackingList';
import TrackBar from './TrackBar';

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/goalsDB")
    .then(r => r.json())
    .then(d => setData(d))
  }, [])

  //- this is used to add a goal
  const [newGoal, setNewGoal] = useState({
    title: "",
    activity: "",
    minmax: "at least",
    number: 1,
    unit: "",
    interval: "per day",
    actions: [],
  })

  //- this is used to add an action
  const [newAction, setNewAction] = useState({
    dateTime: "",
    number: 1,
    notes: "",
  })

  //- this is used to select a goal from the list
  const [focus, setFocus ] = useState({})

  function saveGoal() {   // - checks if newGoal is unique before saving
    const duplicate = data.some(goal => goal.title === newGoal.title)   
    if (duplicate) {
      alert("Please use a unique Goal Name")
    } else {
      fetch("http://localhost:4000/goalsDB", {
        method: "POST",
        headers: {"content-type": "application/json" },
        body: JSON.stringify(newGoal)
      })
      .then(res=>res.json())
      .then(d=> setData([...data, d]) )
      
    }
  }

  function saveAction() {
    const modifiedGoal = {...focus, actions: [...focus.actions, newAction ]}
    fetch(`http://localhost:4000/goalsDB/${focus.id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json" },
      body: JSON.stringify(modifiedGoal)
    })
    .then(r=>r.json())
    .then(resp=> setData( data.map(eachGoal=>( eachGoal.title === focus.title ? resp : eachGoal )) ) )
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
              <GoalList data={data} setData={setData } focus={focus} setFocus={setFocus} />
              <GoalAdd newGoal={newGoal} setNewGoal={setNewGoal} saveGoal={saveGoal} />
            </GoalPage> 
          </Route>
          <Route path="/log"> 
            <LogPage newAction={newAction} setNewAction={setNewAction} data={data} saveAction={saveAction} focus={focus} setFocus={setFocus} /> 
          </Route>
          <Route path="/track"> 
            <TrackingPage>
              <GoalList data={data} setData={setData } focus={focus} setFocus={setFocus} />
              <TrackingList focus={focus} />
              <TrackBar focus={focus} />
            </TrackingPage> 
          </Route>
        </Switch>
      </div>     
    </div>
  );
}

export default App;