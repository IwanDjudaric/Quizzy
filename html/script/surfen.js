// Vragenlijst
let questions = [
    { question: "Wat is de ideale golfrichting voor surfen?", options: ["Onshore", "Offshore", "Sideshore"], correct: "Offshore", answerType: "multiple", image: "./images/surfing/offshore.jpg" },
    { question: "Wat betekent 'duck dive' bij surfen?", options: ["Over de golf springen", "Onder een golf duiken", "Balans op het board bewaren"], correct: "Onder een golf duiken", answerType: "multiple", image: "./images/surfing/duckdive.jpg" },
    { question: "Welk materiaal wordt vaak gebruikt voor surfboards?", options: ["Hout", "Schuim en epoxy", "Plastic"], correct: "Schuim en epoxy", answerType: "multiple", image: "./images/surfing/material.jpg" },
    { question: "Wat is een ‘pop-up’ bij surfen?", options: ["Opstaan op je board", "Over de golf springen", "Onder een golf duiken"], correct: "Opstaan op je board", answerType: "multiple", image: "./images/surfing/popup.jpg" },
    { question: "Hoe noem je de voorkant van een surfboard?", options: ["Tail", "Nose", "Rail"], correct: "Nose", answerType: "multiple", image: "./images/surfing/nose.jpg" },
    { question: "Wat betekent ‘dropping in’?", options: ["Voor iemand anders een golf pakken", "Van het board vallen", "Op een golf wachten"], correct: "Voor iemand anders een golf pakken", answerType: "multiple", image: "./images/surfing/droppingin.jpg" },
    { question: "Wat is een reef break?", options: ["Golven die breken over een rif", "Golven die breken over zand", "Golven die breken tegen een muur"], correct: "Golven die breken over een rif", answerType: "multiple", image: "./images/surfing/reefbreak.jpg" },
    { question: "Wat is een leash?", options: ["Een koord om je surfboard aan je enkel vast te maken", "Wax voor grip", "Een tas voor je board"], correct: "Een koord om je surfboard aan je enkel vast te maken", answerType: "multiple", image: "./images/surfing/leash.jpg" },
    { question: "Wat is een set golfen?", options: ["Een reeks golven die achter elkaar aankomen", "Een enkele grote golf", "Een sterke stroming in de zee"], correct: "Een reeks golven die achter elkaar aankomen", answerType: "multiple", image: "./images/surfing/setwaves.jpg" },
    { question: "Wat doet surf wax?", options: ["Zorgt ervoor dat het board beter glijdt", "Zorgt voor extra grip op het board", "Geeft het board kleur"], correct: "Zorgt voor extra grip op het board", answerType: "multiple", image: "./images/surfing/wax.jpg" },
    { question: "Wat zijn de belangrijkste veiligheidstips bij surfen?", correct: "", answerType: "open" },
    { question: "Wat betekent de term ‘barrel’ in surfen?", correct: "", answerType: "open" },
    { question: "Noem drie verschillende soorten surfboards en hun kenmerken.", correct: "", answerType: "open" },
    { question: "Hoe herken je een goede surfspot?", correct: "", answerType: "open" },
    { question: "Wat moet je doen als je in een sterke stroming terechtkomt?", correct: "", answerType: "open" }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;


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
        imageBox.innerHTML = `<p>Afbeelding hier</p>`; 
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


function checkAnswer(selectedOption = null) {
    let currentQuestion = questions[currentQuestionIndex];
    let userAnswer = selectedOption || document.getElementById("answer-input").value.trim();

    
    userAnswer = userAnswer.replace(/'/g, "").toLowerCase();
    let correctAnswer = currentQuestion.correct.replace(/'/g, "").toLowerCase();

    if (currentQuestion.answerType === "open") {
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    } else if (userAnswer === correctAnswer) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    nextQuestion();
}


function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}


function showResults() {
    document.querySelector(".quiz-box").innerHTML = `
        <h2 class="box">Quiz voltooid!</h2>
        <p class="box">Correcte antwoorden: ${correctAnswers}</p>
        <p class="box">Foute antwoorden of onbeantwoorde vragen : ${wrongAnswers}</p>
        <button onclick="restartQuiz()">Opnieuw starten</button>
    `;
    
    document.querySelector(".image-box").style.display = 'none';
}


function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
   loadQuestion();
   document.querySelector(".image-box").style.display ="block";
}

window.onload=loadQuestion

