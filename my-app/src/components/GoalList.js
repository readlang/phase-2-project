import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ data }) {
    return(
        <div>
            GoalList
            {data.map((item)=>(<GoalItem key={item.title} goal={item} /> ))}
            
            
        </div>
    )
}

export default GoalList;