import React from "react";
import { useState } from "react/cjs/react.development";
import GoalList from "./GoalList";
import LogAdd from "./LogAdd";

function LogPage({ newAction, setNewAction, data, saveAction }) {
    const [focus, setFocus ] = useState("")

    return(
        <div id="logPage">
            <GoalList data={data} setFocus={setFocus} />
            <LogAdd focus={focus} newAction={newAction} setNewAction={setNewAction} saveAction={saveAction}/>
        </div>
    )
}

export default LogPage;