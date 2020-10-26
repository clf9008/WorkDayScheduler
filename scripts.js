//funtion to append the document once the whole document has loaded
$(document).ready(function () {
    //variable to call current day and append it to HTML Page
    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $(".todaysDate").append(today);
    //Variable to call current hour
    var now = parseInt(moment().format('HH'));
    console.log(now)
    //Variable to store in local memory that appends the html page to show hours of work day
    var $text9AM = $("#text9AM");
    var $text10AM = $("#text10AM");
    var $text11AM = $("#text11AM");
    var $text12AM = $("#text12AM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");
    //function to change present, past, and future hours to appropriate colors
    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).addClass("bg-gray");
        }
        if (name > now) {
            $(this).addClass("bg-green")
        }
        if (name === now) {
            $(this).addClass("bg-red")
        }
    })
    //funciton to create an event listener for the "on, click" of the Save Button
    $("button").on("click", function () {
    //Storing input in text block for associated hour into local memory
        localStorage.setItem("9AM", ($text9AM.val()))
        localStorage.setItem("10AM", ($text10AM.val()))
        localStorage.setItem("11AM", ($text11AM.val()))
        localStorage.setItem("12AM", ($text12AM.val()))
        localStorage.setItem("13PM", ($text1PM.val()))
        localStorage.setItem("14PM", ($text2PM.val()))
        localStorage.setItem("15PM", ($text3PM.val()))
        localStorage.setItem("16PM", ($text4PM.val()))
        localStorage.setItem("17PM", ($text5PM.val()))

    })

    //calling the content stored in the local memory to display 
    $("#text9AM").append(localStorage.getItem("9AM"));
    $("#text10AM").append(localStorage.getItem("10AM"));
    $("#text11AM").append(localStorage.getItem("11AM"));
    $("#text12AM").append(localStorage.getItem("12AM"));
    $("#text1PM").append(localStorage.getItem("13PM"));
    $("#text2PM").append(localStorage.getItem("14PM"));
    $("#text3PM").append(localStorage.getItem("15PM"));
    $("#text4PM").append(localStorage.getItem("16PM"));
    $("#text5PM").append(localStorage.getItem("17PM"));

})