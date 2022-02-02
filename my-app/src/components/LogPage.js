import React from "react";
import { useState } from "react/cjs/react.development";
import GoalList from "./GoalList";
import LogAdd from "./LogAdd";

function LogPage({ newAction, setNewAction, allGoalData, saveAction, focus, setFocus }) {
    

    return(
        <div id="logPage">
            <GoalList allGoalData={allGoalData} focus={focus} setFocus={setFocus} />
            <LogAdd focus={focus} newAction={newAction} setNewAction={setNewAction} saveAction={saveAction}/>
        </div>
    )
}

export default LogPage;