import React from "react";

function TrackDay({date, goal}) {
    let conditionalID = "gaugeDayNo"

    if (goal) {
        conditionalID = "gaugeDayYes"
    }

    return(
        <div id="trackDay">
            {date}
            <div id={conditionalID}/>
        </div>
    )
}
 
export default TrackDay;