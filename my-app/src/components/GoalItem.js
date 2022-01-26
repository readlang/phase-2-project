import React from "react";

function GoalItem({ goal, setFocus }) {
	return(
		
		<div id="goalItem"  onClick={()=> setFocus({...goal}) }>
			<h3>{goal.title}</h3>    
			<p>	{goal.activity} {goal.minmax} {goal.number} {goal.unit} {goal.interval}</p>
			<hr/>
		</div>
	)
}

export default GoalItem;