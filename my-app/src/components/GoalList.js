import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ allGoalData, setAllGoalData, focus, setFocus }) {
  
  function deleteGoal() {
    fetch(`http://localhost:4000/goalsDB/${focus.id}`, {
      method: "DELETE",
      headers: {"content-type": "application/json" },
    })
    setAllGoalData( allGoalData.filter(eachgoal =>(eachgoal.id !== focus.id)) )  
    setFocus({})
  }

  return(
    <div id="goalList">
      <h2>Goals</h2>
      <hr/>
      {allGoalData.map((goal)=>(<GoalItem key={goal.title} goal={goal} setFocus={setFocus} /> ))}
      {window.location.pathname === "/goals" && focus.title ? <button onClick={deleteGoal}>Delete {focus.title} Goal & Activity Data</button> : null }
    </div>
  )
}

export default GoalList;