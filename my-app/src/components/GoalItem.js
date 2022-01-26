import React from "react";

function GoalItem({ goal, setFocus }) {
	return(
		// - ternary checks if on /log page to set focus (not needed on /goals page)
		<div id="goalItem"  onClick={()=> window.location.pathname === "/log" ? setFocus({...goal}) : null }>
			<h3>{goal.title}</h3>    
			<p>	{goal.activity} {goal.minmax} {goal.number} {goal.unit} {goal.interval}</p>
			<hr/>
		</div>
	)
}

export default GoalItem;