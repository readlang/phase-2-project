import React from "react";

function GoalItem({ goal }) {
    return(
        <div id="goalItem"  onClick={()=>console.log(goal.title) }>
        <h3>{goal.title}</h3>    
        <p>	{goal.activity} {goal.minmax} {goal.number} {goal.unit} {goal.interval}</p>
        </div>
    )
}

export default GoalItem;