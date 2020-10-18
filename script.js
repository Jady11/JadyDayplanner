// create variables for timeblocks with text area
var textAreaVal9 = localStorage.getItem("#hour-9");
var textAreaVal10 = localStorage.getItem("#hour-10");
var textAreaVal11 = localStorage.getItem("#hour-11");
var textAreaVal12 = localStorage.getItem("#hour-12");
var textAreaVal1 = localStorage.getItem("#hour-1");
var textAreaVal2 = localStorage.getItem("#hour-2");
var textAreaVal3 = localStorage.getItem("#hour-3");
var textAreaVal4 = localStorage.getItem("#hour-4");
var textAreaVal5 = localStorage.getItem("#hour-5");

var textArea9 = $("#hour-9");
var textArea10 = $("#hour-10");
var textArea11 = $("#hour-11");
var textArea12 = $("#hour-12");
var textArea1 = $("#hour-1");
var textArea2 = $("#hour-2");
var textArea3 = $("#hour-3");
var textArea4 = $("#hour-4");
var textArea5 = $("#hour-5");

textArea9.val(textAreaVal9);
textArea10.val(textAreaVal10);
textArea11.val(textAreaVal11);
textArea12.val(textAreaVal12);
textArea1.val(textAreaVal1);
textArea2.val(textAreaVal2);
textArea3.val(textAreaVal3);
textArea4.val(textAreaVal4);
textArea5.val(textAreaVal5);

// $("#hour-9 .description").val(localStorage.getItem("hour-9"));

// past present future block color change
// moment.com?
var date = moment().format("MMM Do YY");  
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
};
time();
$(".description").on("click", function() {

});
$(".saveBtn").on("click", function() {

})




// add current date function
// for loops for time change with if else statements 

// on click function
