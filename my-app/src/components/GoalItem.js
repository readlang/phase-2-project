import React from "react";

function GoalItem({ goal }) {
    return(
        <div>GoalItem
            {goal.title}
        <p>	{goal.activity} {goal.minmax} {goal.number} {goal.unit} {goal.interval}</p>
        </div>
    )
}

export default GoalItem;