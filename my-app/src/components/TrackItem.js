import React from "react";

function TrackItem({action, focus}) {
    console.log("action", action)
    console.log("focus", focus)

    let ampm = "a"
    let DT = action.dateTime.split(/[-,"T",:]/) 
    if (DT[3] > 12) { DT[3] = String(DT[3]-12); ampm = "p" }
    
    //console.log(DT)

    return(
        <div id="trackItem">
            <p style={{fontSize:"x-small"}}> {`${DT[1]}/${DT[2]}/${DT[0]} ${DT[3]}:${DT[4]}${ampm}`}</p>
            <h3>{`${focus.activity} - ${action.number} ${focus.unit} `} </h3>
            <p>{action.notes} </p>
            <hr/>
        </div>
    )
}

export default TrackItem;