//==== Business logic====//

$(document).ready(function() {
$("#blankForm").submit(function(event){
 var styling = $("#styling").val();
  var tag = $("#tag").val();
   var purpose = $("#purpose").val();
    var java = $("#java").val();

var finalScore = parseInt(styling)+parseInt(tag)+parseInt(purpose)+parseInt(java);
$("#finalScore").text("You SCored: " + finalScore + " out of 100");

//==== User Interface ====//

$("#finalScore").show();
event.preventDefault();
});

});
