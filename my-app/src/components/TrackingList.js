import React from "react";
import TrackItem from "./TrackItem";

function TrackingList({ focus, deleteAction  }) {

    // check if there is a focus yet
    if (focus.title) {
        return(
            <div id="trackingList">
                <h2>{focus.title}</h2>
                <hr/>
                {focus.actions[0] ? null : "no actions logged yet"}
                {focus.actions.map(action=> <TrackItem key={action.id} action={action} focus={focus} deleteAction={deleteAction} />  )}
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