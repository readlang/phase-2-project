import React from "react";

function TrackDay({ dateitem }) {
    let { date, goal, number } = dateitem

    //console.log("date", date, "goal", goal)

    let conditionalID = "gaugeDayNoData"

    if (goal === "dataReceived") {
        conditionalID = "gaugeDayNo"
    } else if (goal === "goalAchieved") {
        conditionalID = "gaugeDayYes"
    }

    return(
        <div id="trackDay">
            &ensp; {number}
            <div id={conditionalID} />
            {date}
        </div>
    )
}
 
export default TrackDay;


// style={{ height: number, minHeight: "3px"}} 