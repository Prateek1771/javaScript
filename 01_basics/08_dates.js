let date = new Date()
// console.log(date);                         // 2024-09-05T02:54:01.221Z
// console.log(date.toString());              // Thu Sep 05 2024 02:54:01 GMT+0000 (Coordinated Universal Time)
// console.log(date.toLocaleString());        // 9/5/2024, 2:54:01 AM
// console.log(date.toDateString());          // Thu Sep 05 2024
// console.log(date.toISOString());           // 2024-09-05T02:54:01.221Z
// console.log(date.toLocaleTimeString());    // 2:54:01 AM

let new_date = new Date(2003, 3, 14)
// console.log(new_date.toDateString());         // Mon Apr 14 2003
 
let new_date_time = new Date(2003, 3, 14, 3, 2, 10)
// console.log(new_date_time.toLocaleString());  // 4/14/2003, 3:02:10 AM
 
let new_date_time1 = new Date("04-14-2003")
// console.log(new_date_time1.toLocaleString()); // 4/14/2003, 12:00:00 AM

let myTime = Date.now()
// console.log(myTime);
// console.log(new_date_time.getTime());
// console.log(Math.floor(new_date_time.getTime()/1000));

let new_date1 = new Date()
console.log(new_date1);
console.log(new_date1.getHours());
console.log(new_date1.getDate());
console.log(new_date1.getMonth() + 1);

new_date1.toLocaleString('default',{
    weekday: 'long'
})