import React from "react";
import GoalAdd from "./GoalAdd";
import GoalList from "./GoalList";


function GoalPage({ newGoal, setNewGoal, saveGoal, data }) {
    return(
        <div>
            Goal Page
            <GoalList data={data}  />
            <GoalAdd newGoal={newGoal} setNewGoal={setNewGoal} saveGoal={()=>saveGoal()} />
        </div>
    )
}

export default GoalPage;