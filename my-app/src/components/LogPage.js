import React from "react";
import GoalList from "./GoalList";
import LogAdd from "./LogAdd";

function LogPage({ allGoalData, saveAction, focus, setFocus }) {
    

    return(
        <div id="logPage">
            <GoalList allGoalData={allGoalData} focus={focus} setFocus={setFocus} />
            <LogAdd focus={focus} saveAction={saveAction}/>
        </div>
    )
}

export default LogPage;