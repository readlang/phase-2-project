import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ data }) {
    

    return(
        <div id="goalList">
            <h2>Goals</h2>
            {data.map((goal)=>(<GoalItem key={goal.title} goal={goal}   /> ))}
            
            
        </div>
    )
}

export default GoalList;