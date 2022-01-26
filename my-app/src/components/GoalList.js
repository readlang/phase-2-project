import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ data, setFocus }) {
  return(
    <div id="goalList">
      <h2>Goals</h2>
      <hr/>
      {data.map((goal)=>(<GoalItem key={goal.title} goal={goal} setFocus={setFocus} /> ))}
    </div>
  )
}

export default GoalList;