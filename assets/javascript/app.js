//GLOBAL VARIABLES
//======================================================================================

var timer = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var correctAnswers = ["The Revenant", "Johnny Depp", "Gale", "The Nightmare Before Christmas", "The Bodyguard", "Ian McKellen", "Kathryn Bigelow", "Walt Disney", "Jaws", "Pirates of the Caribbean: On Stranger Tides"];

//FUNCTIONS
//======================================================================================

function endQuiz() {
    if (timer === 0) {
        $("#questionSection").css("display","none");
        $("#gameSection").css("display","none");
        $("#resultsSection").css("display","block");
        $(window).scrollTop(0);
        answerCheck();
        document.getElementById("audio1").pause();
        document.getElementById("audio2").play();
    }
}

function answerCheck() {
    var q1Answer = $("input[type='radio'][name='q1']:checked").val();
    var q2Answer = $("input[type='radio'][name='q2']:checked").val();
    var q3Answer = $("input[type='radio'][name='q3']:checked").val();
    var q4Answer = $("input[type='radio'][name='q4']:checked").val();
    var q5Answer = $("input[type='radio'][name='q5']:checked").val();
    var q6Answer = $("input[type='radio'][name='q6']:checked").val();
    var q7Answer = $("input[type='radio'][name='q7']:checked").val();
    var q8Answer = $("input[type='radio'][name='q8']:checked").val();
    var q9Answer = $("input[type='radio'][name='q9']:checked").val();
    var q10Answer = $("input[type='radio'][name='q10']:checked").val();
    
    //Question 1
    if (q1Answer === correctAnswers[0]) {
        correct++;
    }
    else if (q1Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 2
    if (q2Answer === correctAnswers[1]) {
        correct++;
    }
    else if (q2Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 3
    if (q3Answer === correctAnswers[2]) {
        correct++;
    }
    else if (q3Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 4
    if (q4Answer === correctAnswers[3]) {
        correct++;
    }
    else if (q4Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 5
    if (q5Answer === correctAnswers[4]) {
        correct++;
    }
    else if (q5Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 6
    if (q6Answer === correctAnswers[5]) {
        correct++;
    }
    else if (q6Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 7
    if (q7Answer === correctAnswers[6]) {
        correct++;
    }
    else if (q7Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 8
    if (q8Answer === correctAnswers[7]) {
        correct++;
    }
    else if (q8Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 9
    if (q9Answer === correctAnswers[8]) {
        correct++;
    }
    else if (q9Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Question 10
    if (q10Answer === correctAnswers[9]) {
        correct++;
    }
    else if (q10Answer === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }

    //Updating Answer Totals
    $("#correctAnswers").text("Correct Answers: " + correct);
    $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
    $("#questionsUnanswered").text("Number of Unanswered Questions: " + unanswered);
}

//MAIN PROCESS
//======================================================================================

$("#correctAnswers").text("Correct Answers: " + correct);
$("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
$("#questionsUnanswered").text("Number of Unanswered Questions: " + unanswered);

$("#startButton").on("click", function() {

    $("#questionSection").css("display","block");

    $("#startButton").css("display","none");

    document.getElementById("audio1").play();
    
    var timerLogic = setInterval(function() {
        timer--;
        $("#timer").html("Time Remaining: " + timer);
        endQuiz();
        if (timer <= 0) {
            clearInterval(timerLogic);
            }
    }, 1000)

  });


$("#submitButton").on("click", function() {
    $("#questionSection").css("display","none");
    $("#gameSection").css("display","none");
    $("#resultsSection").css("display","block");
    $(window).scrollTop(0);
    answerCheck();
    document.getElementById("audio1").pause();
});


$('#tryAgainButton').click(function() {
    location.reload();
});