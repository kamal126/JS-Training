// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreateDate = new Date(2023,0,23)
let myCreateDate1 = new Date(2025, 0, 7, 1,53)
let myCreateDate2 = new Date("01-07-2025")
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate1.toLocaleString());
console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);   // 1736238390369
console.log(myCreateDate.getTime());    //1674412200000
console.log(Math.floor(Date.now()/1000));   1736238459

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(`${newDate.getDay()} and the time ${newDate.toLocaleString('defaukt', {
    weeday: "long",
})}`);

/**
2025-01-07T08:29:45.720Z
1
7
2025
2 and the time 7/1/2025, 2:03:52 pm
 */

