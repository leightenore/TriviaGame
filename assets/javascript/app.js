//GLOBAL VARIABLES

var timer = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//FUNCTIONS

// function endQuiz() {
//     if (timer === 0) {
//         $("#questionSection").css("display","none");
//     }
// }


//MAIN PROCESS

$("#correctAnswers").text("Correct Answers: " + correct);
$("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
$("#questionsUnanswered").text("Number of Unanswered Questions: " + unanswered);

$("#startButton").on("click", function() {

    $("#questionSection").css("display","block");

    $("#startButton").css("display","none");
    
    var timerLogic = setInterval(function() {
        timer--;
        $("#timer").html("Time Remaining: " + timer);
        if (timer <= 0) {
            clearInterval(timerLogic);
            }
    }, 1000)
  });


$("#submitButton").on("click", function() {
    $("#questionSection").css("display","none");
    $("#resultsSection").css("display","block");
});

  