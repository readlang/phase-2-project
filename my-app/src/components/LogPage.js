import React from "react";
import { useState } from "react/cjs/react.development";
import GoalList from "./GoalList";
import LogAdd from "./LogAdd";

function LogPage({ data }) {
    const [focus, setFocus ] = useState()

    return(
        <div id="logPage">
            <GoalList data={data}  />
            <LogAdd />
        </div>
    )
}

export default LogPage;