import React, {useState} from "react";

function LogAdd({ focus, saveAction }) {

	const [newAction, setNewAction] = useState({
		id: "",
		dateTime: "",
		number: 1,
		notes: "",
	})

	function handleSubmit(event) {
		event.preventDefault()
		focus.title ? saveAction(newAction) : alert("First select one of your goals")
	}

	return(
		<div id="logAdd">
			<h2>Log an Activity</h2>
			<hr/>
			<h3>{focus.title ? `Goal: ${focus.title}` : null}</h3>
			<p>Target: {focus.activity} {focus.minmax} {focus.number} {focus.unit} {focus.interval} </p>
			<br/>

			<form onSubmit={handleSubmit}>
					<label>Date / Time of Activity</label> 
				<input type="datetime-local" value={newAction.dateTime} onChange={(e)=> setNewAction({...newAction, dateTime:e.target.value})} />
					<label>How many {focus.unit}?</label> 
				<input type="number" value={newAction.number} onChange={e=>setNewAction({...newAction, number: Number(e.target.value) })} />
					<label>Notes?</label> 
				<textarea rows="3" maxLength="100" placeholder="optional..." value={newAction.notes} onChange={e=>setNewAction({...newAction, notes:e.target.value})} />
				{ newAction.dateTime !== "" ? <input type="submit" value="Save to Log"/> : <p>Please complete form to save...</p> }
			</form>

		</div>
	)
}

export default LogAdd