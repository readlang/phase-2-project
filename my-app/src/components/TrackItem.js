import React from "react";

function TrackItem({action, focus}) {
    function handleDeleteClick() {
        console.log("delete action", action.id)
        console.log("focus actions", focus.actions)

        let modifiedActions = [...focus.actions].filter(x=>(x.id !== action.id ))
        const modifiedGoal = {...focus, actions: modifiedActions}


        fetch(`http://localhost:4000/goalsDB/${focus.id}`, {
            method: "PATCH",
            headers: {"content-type": "application/json" },
            body: JSON.stringify(modifiedGoal)
        })
        // - this never updates the setfocus variable OR the setdata variable... need to add that code
        // maybe this fetch should be moved to the App component.  Then it can access everything needed there...
        // deleteAction(action.id)  ?
        .then(r=>r.json())
        .then(d=>console.log(d))

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