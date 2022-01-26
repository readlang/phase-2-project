import React from "react";

function GoalAdd({ newGoal, setNewGoal, saveGoal }) {
	function handleSubmit(event) {
		event.preventDefault()
		saveGoal() 
	}

  return(
   	<div id="goalAdd">
      <h2>Add a Goal</h2>   
      <form onSubmit={handleSubmit}>
				<label>Name: </label>		
				<input type="text" id="title" name="title" placeholder="Get in Shape" value={newGoal.title} onChange={(e)=> setNewGoal({...newGoal, title:e.target.value })  }/>  <br/>
				<label>Activity: </label>	
				<input type="text" id="activity" name="activity" placeholder="Run" value={newGoal.activity} onChange={(e)=> setNewGoal({...newGoal, activity:e.target.value }) } /> <br/>
				<label>Min / max: </label>	
				<select id="minmax" name="minmax" value={newGoal.minmax} onChange={(e)=> setNewGoal({...newGoal, minmax:e.target.value }) } >
					<option value="at least">at least</option>
					<option value="at most">at most</option>
					<option value="exactly">exactly</option>
				</select> <br/>
				<label>Number: </label>		
				<input type="number" id="number" name="number" placeholder="5" value={newGoal.number} onChange={(e)=> setNewGoal({...newGoal, number:e.target.value }) }/> <br/>
				<label>Unit: </label>		
				<input type="text" id="unit" name="unit" placeholder="miles" value={newGoal.unit} onChange={(e)=> setNewGoal({...newGoal, unit:e.target.value }) }/> <br/>
				<label>Interval: </label>	
				<select id="interval" name="interval" value={newGoal.interval} onChange={(e)=> setNewGoal({...newGoal, interval:e.target.value}) }>
						<option value="per day">per day</option>
						<option value="per week">per week</option>
					</select>
				<h4>Preview:  </h4>
					<p>{newGoal.title}</p>
				<p>	{newGoal.activity} {newGoal.activity !== "" ? newGoal.minmax : "" } {newGoal.activity !=="" ? newGoal.number : "" } {newGoal.unit} {newGoal.activity ? newGoal.interval : ""} </p>
				<input type="submit" value="Save Goal"/>
			</form>
    </div>
  )
}

export default GoalAdd;