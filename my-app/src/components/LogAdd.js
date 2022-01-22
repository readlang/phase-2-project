import React from "react";

function LogAdd({ focus, newActivity, setNewActivity }) {
    function handleSubmit(event) {
		event.preventDefault()
        focus.title ? console.log("submit", newActivity) : alert("First select one of your goals")
	}

    return(
        <div id="logAdd">
            <h2>Log an Activity</h2>
            <hr/>
            <h3>{focus.title ? `Goal: ${focus.title}` : focus}</h3>
            <p>Target: {focus.activity} {focus.minmax} {focus.number} {focus.unit} {focus.interval} </p>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Date / Time of Activity</label> <input type="datetime-local" value={newActivity.dateTime} onChange={(e)=> setNewActivity({...newActivity, dateTime:e.target.value})}  />
                <lable>How many {focus.unit}?</lable> <input type="number" />
                <label>Notes?</label> <textarea rows="3" maxLength="100" placeholder="notes optional..." ></textarea>
                <input type="submit" value="Save to Log"/>
            </form>


        </div>
    )
}

export default LogAdd