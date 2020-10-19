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
// function to store the current date
    function storeTodaysDate(){
    //exchanging data with server and using JSONparse to parse the data so it become a javaScript object
        savedSchedule.JSONparse(localStorage.getItem(date));
//If the saved schedule is empty (null) pull up today's date and push that argument to the dateObj in local storage
        if (savedSchedule === null) {
            console.log('creating');
            dateObj['date'] = date;
            dateArray.push(dateObj);
            localStorage.setItem(date, JSON.stringify(dateArray));
        }
    }
//function to pull up a date in the future
    function storeDifferentDate(){
      //variable to call up existing storage in local memory and exchange it with the sever in javaScript  
        var existingStorage = JSON.parse(localStorage.getItem(date));
//if exisiting storage is equal to or the same value as null run the function
        if (existingStorage !== null) {
            scheduleArray = existingStorage;
        } else {
            currentDateObj = {};
            currentDateArr = [];
            currentDateObj['date'] = date;
            currentDateArray.push(currentDateObj);
            localStorage.setItem(date, JSON.stringify(currentDateArr));
        } 
    }
//function to update the current day and time
    function updateTime(differntDate) {
        if (differentDate) !== date) {
            var currentDate = moment.().format('dddd, MMMM, Do');
            var currentYear = moment().format('YYYY');
            $('#title-date').html(currentDate);
            $('#title-year').html(currentYear);
            dynamicTime();
        }
//if on current day and time, run this code block that shows what is scheduled for today
        if (day < 0) {
            $('#title-date').html(differntDate);
            $('#title-time').html(
                'What you have scheduled for today.'
            );
            $('#dynamic-time.').hide(); //hide the current day and time

            var dayOfYear = moment().dayOfYear();
            if (dayOfYear + day ===0) {
                currentYear = previousDate.format('YYYY');
                $('#title-year').html(currentYear);
            }
//else if today is current but time is past show what has been completed
        } else if (day > 0) {
            currentYear = nextDate.format('YYYY');
            $('#title-date').hmtl(differntDate);
            $('#title-time').html(
                'What you have already completed'
            );
            $('#title-year').html(currentYear);
            $('#dynamic-time').hide();
//else if today is curret show what is planned for the rest of the day       
        } else {
            currentYear = moment.().format('YYYY');
            $('#title-time').html(
                'Here is your schedule for today. The current time is:'
            );
            $('#title-year').html(currentYear)
            $('#dynamic-time').show(); //show the current time 
            dynamicTime();
        }
    }

}))