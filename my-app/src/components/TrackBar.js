import React from "react";
import TrackDay from "./TrackDay";

function TrackBar({focus}) {
    let dateArray = []
        
    for (let index = 13; index >= 0; index--) {
        const today = new Date()
        today.setDate(today.getDate() - index ) 
        dateArray.push( today.toISOString().slice(5, 10).replace("-","/") )        
    }

    console.log(dateArray)  

    return(
        <div id="trackBar">
            <h3>{focus.title}&emsp;</h3>
            { dateArray.map(x=> <TrackDay key={x} date={x} /> ) }

        </div>
    )
}

export default TrackBar;