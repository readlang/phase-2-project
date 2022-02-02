import React from "react";
import TrackDay from "./TrackDay";

function TrackBar({focus}) {
    let dateArray = []
    let secondWeek = false
    let firstWeekTotal = 0
    let secondWeekTotal = 0
    let twoWeekTotal = 0
    let firstWeekAchievedCounter = 0
    let secondWeekAchievedCounter = 0
        
    for (let index = 13; index >= 0; index--) {
        const today = new Date()
        today.setDate(today.getDate() - index ) 
        let achieved = "noData"
        let singleDayTotal = 0
        if (index <= 6) {secondWeek = true}

        focus.actions.map((item)=>{ if (item.dateTime.slice(0, 10) === today.toISOString().slice(0, 10) ) {
            achieved = "dataReceived"
            singleDayTotal = singleDayTotal + item.number
            
            if ( focus.minmax === "at least" && singleDayTotal >= focus.number && focus.interval === "per day" ) {
                achieved = "goalAchieved"
                secondWeek ? secondWeekAchievedCounter += 1 : firstWeekAchievedCounter += 1
            }  
            if ( focus.minmax === "at most" && singleDayTotal <= focus.number && focus.interval === "per day" ) {
                achieved = "goalAchieved"
                secondWeek ? secondWeekAchievedCounter += 1 : firstWeekAchievedCounter += 1
            }
            if (focus.minmax === "exactly" && singleDayTotal === focus.number && focus.interval === "per day" ) {
                achieved = "goalAchieved"
                secondWeek ? secondWeekAchievedCounter += 1 : firstWeekAchievedCounter += 1
            }

        }})

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

    let firstWeekAchieved
    let secondWeekAchieved

    if (focus.interval === "per week") {
        if (focus.minmax === "at least" ) {
            firstWeekTotal >= focus.number ? firstWeekAchieved = true : firstWeekAchieved = false
            secondWeekTotal >= focus.number ? secondWeekAchieved = true : secondWeekAchieved = false
        }
        if (focus.minmax === "at most" ) {
            firstWeekTotal <= focus.number ? firstWeekAchieved = true : firstWeekAchieved = false
            secondWeekTotal <= focus.number ? secondWeekAchieved = true : secondWeekAchieved = false            
        }
        if (focus.minmax === "exactly" ) {
            firstWeekTotal === focus.number ? firstWeekAchieved = true : firstWeekAchieved = false
            secondWeekTotal === focus.number ? secondWeekAchieved = true : secondWeekAchieved = false
        }
    }
    
    
    return(
        <div id="trackBar">
            <div id="trackBarFlex">
                <div>
                    <h3>{focus.title}&emsp;</h3>
                    <p> {focus.interval === "per day" ? "Daily Goal" : "Weekly Goal"  } &emsp; </p>
                </div>
                { dateArray.map(item => <TrackDay key={item.date} dateitem={item} /> ) }
                <div>
                    
                </div>
            </div>   
            <hr/> 
            <div id="trackBarSummary">
                <h4>Summary</h4>
                <p>Past 7 days total: &nbsp; &ensp; {secondWeekTotal} {focus.unit} &emsp;
                    {focus.interval === "per day" ? 
                        `daily goal achieved ${secondWeekAchievedCounter} days`
                        : 
                        secondWeekAchieved ? " Weekly Goal Achieved! Well Done!" : " Goal not achieved. There's always time to improve!" 
                    } 
                </p>
                <p>Days 8 - 14 total: &nbsp; &ensp; {firstWeekTotal} {focus.unit} &emsp;
                    {focus.interval === "per day" ? 
                        `daily goal achieved ${firstWeekAchievedCounter} days`
                        : 
                        firstWeekAchieved ? " Weekly Goal Achieved! Well Done!" : " Goal not achieved. " 
                    }
                </p>
                <p>Past 14 days total: &ensp; {twoWeekTotal} {focus.unit} </p>
            </div>
        </div>
    )
}

export default TrackBar;