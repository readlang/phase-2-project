var a = new Date()

console.log( 
    a.toISOString().slice(0, 11)+
    a.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        })
)

var d = new Date()
console.log( 
    d.toISOString().slice(0, 11) +
    d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    })
)

window.location.pathname === "/log" ? setFocus({...goal}) : null