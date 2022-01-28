import React from "react";
import TrackDay from "./TrackDay";

function TrackBar({focus}) {
    let dateArray = []
        
    for (let index = 13; index >= 0; index--) {
        const today = new Date()
        today.setDate(today.getDate() - index ) 
        let achieved = false
        focus.actions.map((item)=>{ if (item.dateTime.slice(0, 10) === today.toISOString().slice(0, 10) ) {
            achieved = true
        }} )

        dateArray.push( {
            date: today.toISOString().slice(5, 10).replace("-","/"),
            goal: achieved
        } )        
    }

    console.log(dateArray)  

    return(
        <div id="trackBar">
            <h3>{focus.title}&emsp;</h3>
            { dateArray.map(item => <TrackDay key={item.date} date={item.date} goal={item.goal} /> ) }
            

        </div>
    )
}

export default TrackBar;