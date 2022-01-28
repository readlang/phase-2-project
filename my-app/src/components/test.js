
const today = new Date()

console.log(today.toDateString())

console.log(
    today.toISOString().slice(0, 11)+
    today.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        })
)

let a = "100-200"
console.log(a)

console.log( a.replace("-", "/") )

for (let index = 0; index < 100; index++) {
    console.log( Math.round( Math.random()*1000))    
    
}

       