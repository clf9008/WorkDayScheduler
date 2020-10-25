//declaring variables to store in Global memory
var scheduleHours = [ 9, 10, 11, 12, 13, 14, 15, 15, 17]
var scheduleDisplay = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
//appending the text document to show how we want to the current day displayed
$("#scheduleToday").text(moment().format("dddd, MMMM Do YYYY"))

//for loop to progress current time on schedule display
for (let i = 0; i < scheduleHours.length; i++) {
    //creating a variable in local storage for the current time    
        var currentTime = scheduleDisplay[i]
    
    //Appending the text document to create 9 rows for each hour of the workday with a class id
    $(".container").append('
    <div id= "hour-${scheduleHours[i]}" class= "row block-time">
    <div class= "col-md-12 description" id= "memo-text" />
    <button class= "button saveBtn col-md-2">Save</button>
    </div>
    ')
    
//Appending document to add a current hour, past hour, and future hour
if(moment().format("H") == hour[i]){
    $("#hour-"+ scheduleHours[i].addClass("Current Hour")
}
else if(moment().format("H")> scheduleHours[i]){
    $("#hour-"+ scheduleHours[i].addClass("Past Hours")
}
else if(moment().format("H")< scheduleHours[i]){
    $("#hour-"+ scheduleHours[i].addClass("Future Hours")
}}
