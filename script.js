$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY")); 

})

// create variables for timeblocks with text area
var textAreaVal9 = localStorage.getItem("#9AM");
var textAreaVal10 = localStorage.getItem("#10AM");
var textAreaVal11 = localStorage.getItem("#11AM");
var textAreaVal12 = localStorage.getItem("#12PM");
var textAreaVal1 = localStorage.getItem("#1PM");
var textAreaVal2 = localStorage.getItem("#2PM");
var textAreaVal3 = localStorage.getItem("#3PM");
var textAreaVal4 = localStorage.getItem("#4PM");
var textAreaVal5 = localStorage.getItem("#5PM");

var textArea9 = $("#9AM");
var textArea10 = $("#10AM");
var textArea11 = $("#11AM");
var textArea12 = $("#12PM");
var textArea1 = $("#1PM");
var textArea2 = $("#2PM");
var textArea3 = $("#3PM");
var textArea4 = $("#4PM");
var textArea5 = $("#5PM");

// textArea9.val(textAreaVal9);
// textArea10.val(textAreaVal10);
// textArea11.val(textAreaVal11);
// textArea12.val(textAreaVal12);
// textArea1.val(textAreaVal1);
// textArea2.val(textAreaVal2);
// textArea3.val(textAreaVal3);
// textArea4.val(textAreaVal4);
// textArea5.val(textAreaVal5);



// past present future block color change
// moment.com?
var hour = ("9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM");

var date = moment().format("MMM Do YYYY");  
    console.log(date);
var currentHour = moment().format('LT');
    console.log(currentHour);
function time() {

$("#currentDay").text(date);

$(".time-block").each(function () {
  if(hour < currentHour) {
        $(this).addClass("past");
    } else if (hour === currentHour) {
        $(this) .removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    });
}

time();

$("9AM .description").val(localStorage.getItem("9AM"));
$("10AM .description").val(localStorage.getItem("10AM"));
$("11AM .description").val(localStorage.getItem("11AM"));
$("12PM .description").val(localStorage.getItem("12PM"));
$("1PM .description").val(localStorage.getItem("1PM"));
$("2PM .description").val(localStorage.getItem("2PM"));
$("3PM .description").val(localStorage.getItem("3PM"));
$("4PM .description").val(localStorage.getItem("4PM"));
$("5PM .description").val(localStorage.getItem("5PM"));

$(".saveBtn").on("click", function() {
    var value= $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(value, time);


})


// add current date function
// for loops for time change with if else statements 

// on click function
