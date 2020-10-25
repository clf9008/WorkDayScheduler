//declaring variables to store in Global memory
var scheduleHours = [ 9, 10, 11, 12, 13, 14, 15, 15, 17]
var scheduleDisplay = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
//appending the text document to show how we want to the current day displayed
$("#scheduleToday").text(moment().format("dddd, MMMM Do YYYY"))

