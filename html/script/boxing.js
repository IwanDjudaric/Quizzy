let questions = [
    { question: "Wat is de meest voorkomende boksstand?", options: ["Orthodox", "Southpaw", "Square"], correct: "Orthodox", answerType: "multiple" },
    { question: "Hoeveel ronden heeft een standaard professioneel gevecht?", options: ["10", "12", "15"], correct: "12", answerType: "multiple" },
    { question: "Wie wordt beschouwd als de grootste bokser aller tijden?", options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather"], correct: "Muhammad Ali", answerType: "multiple" },
    { question: "Wat is de naam van de boksorganisatie bekend als WBC?", options: ["World Boxing Committee", "World Boxing Championship", "World Boxing Council"], correct: "World Boxing Council", answerType: "multiple" },
    { question: "Hoe wordt een rechter directe ook genoemd?", options: ["Hook", "Jab", "Cross"], correct: "Cross", answerType: "multiple" },
    { question: "Wat is de bijnaam van Mike Tyson?", options: ["Iron Mike", "The Greatest", "The Hitman"], correct: "Iron Mike", answerType: "multiple" },
    { question: "Welke gewichtsklasse is de zwaarste in het boksen?", options: ["Lichtgewicht", "Middengewicht", "Zwaargewicht"], correct: "Zwaargewicht", answerType: "multiple" },
    { question: "Welke bokser stond bekend om de uitspraak 'Float like a butterfly, sting like a bee'?", correct: "Muhammad Ali", answerType: "open" },
    { question: "Wie Wie werd in 1986 de jongste persoon ooit die het WBC zwaargewichtkampioenschap won?", correct: "Mike Tyson", answerType: "open" },
    { question: "Wie was wereldkampioen zwaargewicht van 1952 tot 1956, toen hij ongeslagen met pensioen ging in 49 gevechten?", correct: "Rocky Marciano", answerType: "open" },
    { question: "Wie heeft Mike Tyson, Floyd Patterson, and José Torres, gecoached", correct: "Cus D'amato", answerType: "open" },
    { question: "Wie versloeg Muhammad Ali in 'The Fight of the Century' in 1971?", correct: "Joe Frazier", answerType: "open" }

];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

//zorgt ervoor dat de vraag wordt geladen.
function loadQuestion() {
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    let openAnswerElement = document.getElementById("open-answer");
    let answerInput = document.getElementById("answer-input");
    let imageBox = document.querySelector(".image-box");

    optionsElement.innerHTML = "";
    answerInput.value = "";
    openAnswerElement.style.display = "none";

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    if (currentQuestion.image) {
        imageBox.innerHTML = `<img src="${currentQuestion.image}" alt="Afbeelding bij vraag">`;
    } else {
        imageBox.innerHTML = `<p>Afbeelding hier</p>`; // als er geen img is.
    }

    if (currentQuestion.answerType === "multiple") {
        currentQuestion.options.forEach(option => {
            let optionElement = document.createElement("div");
            optionElement.classList.add("option");
            optionElement.innerText = option;
            optionElement.onclick = () => checkAnswer(option);
            optionsElement.appendChild(optionElement);
        });
    } else {
        openAnswerElement.style.display = "block";
    }
}
//controleerd of het antwoord goed is.
function checkAnswer(selectedOption = null) {
    let currentQuestion = questions[currentQuestionIndex];
    let userAnswer = selectedOption || document.getElementById("answer-input").value.trim();

    // Verwijder apostrofs en converteer beide antwoorden naar lowercase voor een caseless, apostrofless vergelijking
    userAnswer = userAnswer.replace(/'/g, "").toLowerCase();
    let correctAnswer = currentQuestion.correct.replace(/'/g, "").toLowerCase();

    if (currentQuestion.answerType === "open" && userAnswer === correctAnswer) {
        correctAnswers++;
    } else if (currentQuestion.answerType === "open") {
        wrongAnswers++;
    } else if (currentQuestion.answerType === "multiple" && userAnswer === correctAnswer) {
        correctAnswers++;
    } else if (currentQuestion.answerType === "multiple") {
        wrongAnswers++;
    }

    nextQuestion();
}
//zorgt ervoor dat de volgende vraag wordt geladen.
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        document.querySelector(".quiz-box").innerHTML = `<h2>Quiz voltooid!</h2><p>Correcte antwoorden: ${correctAnswers}</p><p>Foute antwoorden: ${wrongAnswers}</p>`;
    }
}

window.onload = loadQuestion;