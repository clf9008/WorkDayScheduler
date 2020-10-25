//loading the function onces the html page is ready
$(document).ready(function () {
    //creating a variable to store in local memory that has the current date
    var today = moment().format('MMMM Do YYYY');
    // console.log(today)
    $(".todaysDate").append(today);
    //creating a variable to store in local memory that has the current time
    var now = parseInt(moment().format('HH'));
    // console.log(now)
//creating variables that append the HTML docuemnt to display work hours 9am-5pm
    var $text9AM = $("#text9AM");
    var $text10AM = $("#text10AM");
    var $text11AM = $("#text11AM");
    var $text12AM = $("#text12AM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");
   //function that will change the color of the background for past, present, future 
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
    //creating an 'on-click' event function that will store any input plavce in text box
    $("button").on("click", function () {
        //Sending items to local storage if they are entered into input value
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
    //Grabbing the content from local storage and displaying it on the page when refreshed
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