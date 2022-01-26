import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ data, setData, focus, setFocus }) {
  function deleteGoal() {
    fetch(`http://localhost:4000/goalsDB/${focus.id}`, {
      method: "DELETE",
      headers: {"content-type": "application/json" },
      //body: JSON.stringify(newGoal)
    })
    setData([...data.filter(x =>(x.id !== focus.id)) ])  
    setFocus({})
  }

  return(
    <div id="goalList">
      <h2>Goals</h2>
      <hr/>
      {data.map((goal)=>(<GoalItem key={goal.title} goal={goal} setFocus={setFocus} /> ))}
      {window.location.pathname === "/goals" && focus.title ? <button onClick={deleteGoal}>Delete {focus.title} Goal & Activity Data</button> : null }
    </div>
  )
}

export default GoalList;