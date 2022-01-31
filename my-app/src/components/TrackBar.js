import React from "react";
import TrackDay from "./TrackDay";

function TrackBar({focus}) {
    let dateArray = []
        
    for (let index = 13; index >= 0; index--) {
        const today = new Date()
        today.setDate(today.getDate() - index ) 
        let achieved = "noData"
        let singleDayTotal = 0

        focus.actions.map((item)=>{ if (item.dateTime.slice(0, 10) === today.toISOString().slice(0, 10) ) {
            achieved = "yesData"
            singleDayTotal = singleDayTotal + item.number
            // This is first only going to work for "per day" goals...
            console.log(singleDayTotal)

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
    }

    console.log(dateArray)  

    return(
        <div id="trackBar">
            <h3>{focus.title}&emsp;</h3>
            { dateArray.map(item => <TrackDay key={item.date} dateitem={item} /> ) }
            

        </div>
    )
}

export default TrackBar;