const questions = document.querySelectorAll(".question-answer"),
  questionTitle = document.querySelector(".question-title");

// Click EV for questions
questions.forEach((question) => {
  const questionIcon = question.querySelector(".question-icon");
  const answer = question.querySelector(".answer");
  question.addEventListener("click", () => {
    // Flip icon
    questionIcon.classList.toggle("show");

    // Show answer
    answer.classList.toggle("show");
  });
});
