const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEL = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEL.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStore();
  } else {
    score--;
    updateLocalStore();
  }
});

function updateLocalStore() {
  localStorage.setItem("score", JSON.stringify(score));
}
