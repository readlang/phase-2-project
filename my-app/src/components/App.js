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
  const [allGoalData, setAllGoalData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/goalsDB")
    .then(r => r.json())
    .then(d => setAllGoalData(d))
  }, [])

  const [focus, setFocus ] = useState({})

  function saveGoal(newGoal) {   // - checks if newGoal is unique before saving
    const duplicate = allGoalData.some(eachGoal => eachGoal.title === newGoal.title)   
    if (duplicate) {
      alert("Please use a unique Goal Name")
    } else {
      fetch("http://localhost:4000/goalsDB", {
        method: "POST",
        headers: {"content-type": "application/json" },
        body: JSON.stringify(newGoal)
      })
      .then(res=>res.json())
      .then(newGoalReturn => setAllGoalData([...allGoalData, newGoalReturn]) )
    }
  }

  function saveAction(newAction) {
    let modifiedActions = [...focus.actions]
    modifiedActions.push( {...newAction, id: Math.round(Math.random()*10000) })
    const modifiedGoal = {...focus, actions: modifiedActions}
    setFocus( modifiedGoal )

    fetch(`http://localhost:4000/goalsDB/${focus.id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json" },
      body: JSON.stringify(modifiedGoal)
    })
    .then(r=>r.json())
    .then(resp=> setAllGoalData( allGoalData.map(eachGoal=>( eachGoal.title === focus.title ? resp : eachGoal )) ) )
  }

  function deleteAction (id) {
    let modifiedActions = focus.actions.filter(action=>(action.id !== id ))
    const modifiedGoal = {...focus, actions: modifiedActions}
    setFocus( modifiedGoal )

    fetch(`http://localhost:4000/goalsDB/${focus.id}`, {
        method: "PATCH",
        headers: {"content-type": "application/json" },
        body: JSON.stringify(modifiedGoal)
    })
    .then(r=>r.json())
    .then(resp=> setAllGoalData(allGoalData.map(eachGoal=>( eachGoal.title === focus.title ? resp : eachGoal ))  ) )
  }

  return (
    <div id="App">
      <header id="App-header"> <NavBar /> </header>

      <div id='App-body'>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/goals"> 
            <GoalPage >
              <GoalList allGoalData={allGoalData} setAllGoalData={setAllGoalData } focus={focus} setFocus={setFocus} />
              <GoalAdd saveGoal={saveGoal} />
            </GoalPage> 
          </Route>
          <Route path="/log"> 
            <LogPage allGoalData={allGoalData} saveAction={saveAction} focus={focus} setFocus={setFocus} /> 
          </Route>
          <Route path="/track"> 
            <TrackingPage>
              <GoalList allGoalData={allGoalData} setAllGoalData={setAllGoalData } focus={focus} setFocus={setFocus} />
              <TrackingList focus={focus} deleteAction={deleteAction}/>
              { focus.title ? <TrackBar focus={focus} /> : null }
            </TrackingPage> 
          </Route>
        </Switch>
      </div>     
    </div>
  );
}

export default App;