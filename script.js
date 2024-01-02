function checkAnswers() {
  var foodAnswer = document.getElementById("foodQuestion").value;
  var colorAnswer = document.getElementById("colorQuestion").value;
  var activityAnswer = document.getElementById("activityQuestion").value;
  var placeAnswer = document.getElementById("placeQuestion").value;

  var correctAnswers = 0;

  if (foodAnswer === "littiChoka") correctAnswers++;
  else showCorrectAnswer("Litti Choka");

  if (colorAnswer === "blue") correctAnswers++;
  else showCorrectAnswer("Blue");

  if (activityAnswer === "gaming") correctAnswers++;
  else showCorrectAnswer("Gaming");

  if (placeAnswer === "BhainaDaDhaba") correctAnswers++;
  else showCorrectAnswer("Bhaina da Dhaba");

  displayResult(correctAnswers);
}

function showCorrectAnswer(correctOption) {
  var answerDiv = document.getElementById("answer");
  answerDiv.textContent = `Oops! The correct answer was: ${correctOption}`;
  answerDiv.style.display = "block";
}

function displayResult(correctAnswers) {
  var message = "";

  if (correctAnswers === 4) {
    message = "Congratulations! You got all the answers correct.";
  } else {
    message = `Oops! ${4 - correctAnswers} answer(s) are incorrect. Try again!`;
  }

  alert(message);
  // Optionally, you can add more logic to reset the quiz or perform other actions after displaying the result.
}
