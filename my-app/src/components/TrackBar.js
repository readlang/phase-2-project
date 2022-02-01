import React from "react";
import TrackDay from "./TrackDay";

function TrackBar({focus}) {
    let dateArray = []
    let secondWeek = false
    let firstWeekTotal = 0
    let secondWeekTotal = 0
    let twoWeekTotal = 0
        
    for (let index = 13; index >= 0; index--) {
        const today = new Date()
        today.setDate(today.getDate() - index ) 
        let achieved = "noData"
        let singleDayTotal = 0
        if (index <= 6) {secondWeek = true}

        focus.actions.map((item)=>{ if (item.dateTime.slice(0, 10) === today.toISOString().slice(0, 10) ) {
            achieved = "yesData"
            singleDayTotal = singleDayTotal + item.number
            // This is first only going to work for "per day" goals...
            console.log("singleDayTotal:", singleDayTotal)

            if ( focus.minmax === "at least" && singleDayTotal >= focus.number ) {
                achieved = "goalAchieved"
            }  
            if ( focus.minmax === "at most" && singleDayTotal <= focus.number ) {
                achieved = "goalAchieved"
            }
            if (focus.minmax === "exactly" && singleDayTotal === focus.number ) {
                achieved = "goalAchieved"
            }

        }} )

        dateArray.push( {
            date: today.toISOString().slice(5, 10).replace("-","/"),
            goal: achieved,
            number: singleDayTotal
        } )        

        secondWeek ? secondWeekTotal += singleDayTotal : firstWeekTotal += singleDayTotal
        twoWeekTotal += singleDayTotal
    }

    console.log(dateArray)  
    console.log("secondWeekTotal", secondWeekTotal)
    console.log("firstWeekTotal", firstWeekTotal)
    
    return(
        <div id="trackBar">
            <div id="trackBarFlex">
                <div>
                    <h3>{focus.title}&emsp;</h3>
                    <p> {focus.interval === "per day" ? "Daily Goal" : "Weekly Goal"  } &emsp; </p>
                </div>
                { dateArray.map(item => <TrackDay key={item.date} dateitem={item} /> ) }
                <div>
                    {twoWeekTotal} {focus.unit} <br/> total
                </div>
            </div>   
            <hr/> 
            <div id="trackBarSummary">
                <h4>Summary</h4>
                <p>Last week total: {secondWeekTotal} {focus.unit} </p>
                <p>Week prior total: {firstWeekTotal} {focus.unit} </p>
            </div>
        </div>
    )
}

export default TrackBar;