import React from "react";

function LogAdd({ focus }) {
    function handleSubmit(event) {
		event.preventDefault()
		console.log("submit", event.target[0].value)
	}

    return(
        <div id="logAdd">
            <h2>Log an Activity</h2>
            <h3>{focus.title ? focus.title : focus}</h3>
            <p>{focus.activity} {focus.minmax} {focus.number} {focus.unit} {focus.interval} </p>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Date / Time</label> <input type="datetime-local"/>
                <lable>How many {focus.unit}?</lable> <input type="number" />
                <label>Notes?</label> <textarea rows="3" maxLength="100" placeholder="optional..." ></textarea>
                <input type="submit" value="Save to Log"/>
            </form>


        </div>
    )
}

export default LogAdd