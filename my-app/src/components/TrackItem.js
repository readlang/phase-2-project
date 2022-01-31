import React from "react";

function TrackItem({ action, focus, deleteAction }) {

    function handleDeleteClick() {
        deleteAction(action.id)
    }
    
    let ampm = "a"
    let DT = action.dateTime.split(/[-,"T",:]/) 
    if (DT[3] > 12) { DT[3] = String(DT[3]-12); ampm = "p" }
    
    return(
        <div id="trackItem">
            <p style={{fontSize:"x-small"}}> {`${DT[1]}/${DT[2]}/${DT[0]} ${DT[3]}:${DT[4]}${ampm}`}</p>
            <h3>{`${focus.activity} - ${action.number} ${focus.unit} `} &emsp; &emsp; &emsp;  
                <button onClick={handleDeleteClick} style={{background: "gray"}}> ✖️ </button>  </h3>
            <p>{action.notes} </p>
            <hr/>
        </div>
    )
}

export default TrackItem;