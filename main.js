/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {


//1.
$(".alertme").click(function(){
  alert("jQuery seems easy so far!");
});

//2.
// $(".clickme").click(function (){
//   $(".clickme").text("I was clicked");
// });

$(".clickme").on("click", function(){
  $(".clickme").text("I was clicked");
})

//3.
$(".addStyle").on("click", function(){
  $("button").addClass("buttonStyle");
});

//4.
$(".addDifferentStyle").click(function () {
  $(".addDifferentStyle").addClass("addUniqueStyle");
});

//5.
$(".removeBtn").click(function () {
  $("button").removeClass("buttonStyle addUniqueStyle");
});


//6.
$(".clickToggle").click(function () {
  $(".clickToggle").toggleClass("buttonStyle");
})

//7.
$(".squareBtn").click(function functionName() {
  $(".square").hide();
})


//8.
$(".circle").click(function functionName() {
  $(".circle").hide();
})


//9.
$(".toggleRedSquare").on("click", function () {
  $(".redSquare").toggle(1500);
})


});  // Close: $(document).ready(function() {
