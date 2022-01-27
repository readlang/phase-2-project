import React from "react";

function TrackDay({date}) {
    const conditionalID = "gaugedayblue"


    return(
        <div id="trackDay">
            {date}
            <div id={conditionalID}/>
        </div>
    )
}

export default TrackDay;