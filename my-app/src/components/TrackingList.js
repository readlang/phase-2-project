import React from "react";
import TrackItem from "./TrackItem";

function TrackingList({ focus  }) {

    // check if there is a focus yet
    if (focus.title) {
        return(
            <div id="trackingList">
                <h2>{focus.title}</h2>
                <hr/>
                {focus.actions[0] ? null : "no actions logged yet"}
                {focus.actions.map(action=> <TrackItem key={action.dateTime} action={action} focus={focus} />  )}
            </div>
        )
    } else {
        return(
            <div id="trackingList">
                Select a Goal to track from the left...
            </div>
        )
    }


    
}

export default TrackingList;