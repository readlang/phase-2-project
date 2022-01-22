import React from "react";
import { useState } from "react/cjs/react.development";
import GoalList from "./GoalList";
import LogAdd from "./LogAdd";

function LogPage({ newActivity, setNewActivity, data }) {
    const [focus, setFocus ] = useState("First select one of your goals...")

    console.log(focus)

    return(
        <div id="logPage">
            <GoalList data={data} setFocus={setFocus} />
            <LogAdd focus={focus} newActivity={newActivity} setNewActivity={setNewActivity}/>
        </div>
    )
}

export default LogPage;