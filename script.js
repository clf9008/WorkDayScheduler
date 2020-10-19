//declaring variables to store in Global memory
var scheduleArray = [];
var scheduleObj = {};
var dateArray = [];
var dateObj = {};
var storedSchedule;  //variable to create storage for schedule tasks
var savedSchedule;  //variable to create saved schedule events
var date = moment().format('LL'); //variable to pull up the current date
previous = 0;  //previous day's tasks
next = 0;  //next day's tasks
day = 0;  // current day's tasks
console.log(scheduleArray)
console.log(scheduleObj)
console.log(dateArray)
console.log(dateObj)
console.log(storedSchedule)
console.log(savedSchedule)
console.log(date)


$(document).ready(function( {
    init();
//function to call initial date, time and events stored
    function init() {
        storeTodaysDate();
        changeDay();
        updateTime();
        displaySchedule();
        scheduleFocus();
        saveEvent();
        clearSchedule();
    }
}))