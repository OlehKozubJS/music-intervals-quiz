const generalInfoOutput = document.querySelector(".general-info-output");
const questionForm = document.querySelector(".question-form");
const questionOutput = document.querySelector(".question-output");
const answerOutput = document.querySelector(".answer-output");
const enteredAnswerOutput = document.querySelector(".entered-answer-output");
const startQuizButton = document.querySelector(".start-quiz-button");

let points = 0;
let questionData;
let answerData;
let soundAnswerData = "";
let signAnswerData = "";
let enteredAnswerData = "";
let isStarted = false;

questionForm.addEventListener("click", questionEnter);
questionForm.addEventListener("submit", questionCheck);
startQuizButton.addEventListener("click", startQuizFunction);

const getRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
const circleSum = (number1, number2, divisor) => (number1 + number2) % divisor;

function startQuizFunction() {
    isStarted = true;
    signAnswerData = "";
    enteredAnswerData = "";
    generalInfoOutput.textContent = "Вітаємо у інтервальній вікторині!";
    enteredAnswerOutput.textContent = "Ваша відповідь: До";
    getQuestion();
}

function questionEnter(event) {
    if (isStarted === false) return;

    if (event.target.className === "answer-sound-button") soundAnswerData = event.target.value; 
    else if (event.target.className === "answer-sign-button") signAnswerData = event.target.value;
    else return;
    
    enteredAnswerData = soundAnswerData + signAnswerData;

    enteredAnswerOutput.textContent = "Ваша відповідь: " + enteredAnswerData;
}

function questionCheck(event) {
    event.preventDefault();

    if (isStarted === false) return;

    if (enteredAnswerData === answerData) {
        points += 1;
        generalInfoOutput.textContent = points + " Правильно!";
    }
    else {
        points -= 1;
        generalInfoOutput.textContent = points + " Неправильно! Правильна відповідь: " + answerData;
    }

    signAnswerData = "";
    enteredAnswerData = "";
    enteredAnswerOutput.textContent = "Ваша відповідь: До"; 

    event.currentTarget.reset();

    getQuestion();
}

function getQuestion() {
    const newInterval = intervals[getRandomNumber(0, 13)];
    const newSound = sounds[getRandomNumber(0, 6)];
    const newSign = signs[getRandomNumber(1, 3)];
     
    const resultSoundDegrees = (newInterval.degrees + newSound.degrees) % 7;
    const resultSoundSemitones = (newInterval.semitones + newSound.semitones) % 12 + newSign.semitones;

    questionData = `${newInterval.name} від звуку ${newSound.name}${newSign.name}`;
    answerData = getSoundAndSign(resultSoundDegrees, resultSoundSemitones);

    questionOutput.textContent = questionData;
}