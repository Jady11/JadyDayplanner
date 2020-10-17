var date = moment().format("MMM Do YY");  
    console.log(date);
var currentHour = moment().format('LT');
    console.log(currentHour);
function time() {


$("#currentDay").text(date);
$(".block").each(function () {
    if(hour <currentHour) {
        $(this).addClass("past");
    }
    else if (hour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
};
time();


// create variables for timeblocks with text area
var textAreaVal9 = localStorage.getItem("#hr-9");
var textAreaVal10 = localStorage.getItem("#hr-10");
var textAreaVal11 = localStorage.getItem("#hr-11");
var textAreaVal12 = localStorage.getItem("#hr-12");
var textAreaVal1 = localStorage.getItem("#hr-1");
var textAreaVal2 = localStorage.getItem("#hr-2");
var textAreaVal3 = localStorage.getItem("#hr-3");
var textAreaVal4 = localStorage.getItem("#hr-4");
var textAreaVal5 = localStorage.getItem("#hr-5");

var textArea9 = $("#hr-9");
var textArea10 = $("#hr-10");
var textArea11 = $("#hr-11");
var textArea12 = $("#hr-12");
var textArea1 = $("#hr-1");
var textArea2 = $("#hr-2");
var textArea3 = $("#hr-3");
var textArea4 = $("#hr-4");
var textArea5 = $("#hr-5");

textArea9.val(textAreaVal9);
textArea10.val(textAreaVal10);
textArea11.val(textAreaVal11);
textArea12.val(textAreaVal12);
textArea1.val(textAreaVal1);
textArea2.val(textAreaVal2);
textArea3.val(textAreaVal3);
textArea4.val(textAreaVal4);
textArea5.val(textAreaVal5);

// past present future block color change
// moment.com?


if ( textAreaVal9 < currentHour) {
 
} 
// add current date function
// for loops for time change with if else statements 

