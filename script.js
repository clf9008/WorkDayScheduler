var hours = [
    {
        id: "0",
        hour: "9",
        time: "9",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "1",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "2",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "3",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "4",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "5",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    
]

// function to generate current date in header of text document
function headerDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
//function to save tasks for day/hour to local storage
function saveTasks() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

//function to display the tasks that are saved into the local storage
function displayTasks() {
    hours.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

//function that will display any items that had previously been saved in local storage
function previousTasks() {
    //entering variable into local storage for any prreviously stored data in our local storage 
    var storedTasks = JSON.parse(localStorage.getItem("hours"));
    //if storedTasks in local storage is set for hours, display saved tasks.
    if (storedTasks) {
        hours = storedTasks;}
    saveTasks();
    displayTasks();
}

//Loads the current date in the header
headerDate();

//function to append the text document to display the rows/hours
hours.forEach(function(thisHour) {
    //creating time block rows
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);
    //creates time field
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

   
