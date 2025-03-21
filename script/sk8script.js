// Store correct answers
const questions = [
  { 
    question: 'What brand of deck is this?', 
    correctAnswer: 'Anti-hero', 
    options: ['Baker', 'Anti-hero', 'Girl'], 
    image: '../html/style/images/antihero.png'
  },
  { 
    question: 'What brand of wheels is this?', 
    correctAnswer: 'Bones', 
    options: ['Spitfire', 'Bones', 'Powell perelta'],
    image: '../html/style/images/boneswheels.jpg'
  },
  { 
    question: 'What brand of bearings is this?', 
    correctAnswer: 'Bones', 
    options: ['Bones', 'Bronson', 'Enjoi'],
    image: '../html/style/images/bonesreds.png'
  },
  { 
    question: 'What is griptape for?', 
    correctAnswer: 'To keep your feet to the board', 
    options: ['To ensure your board\'s parts stick together', 'To keep your feet to the board', 'To not cause involuntary sliding'],
    image: '../html/style/images/griptape.jpg'
  },
  { 
    question: 'Which brand of shoes is not a skate shoe brand?', 
    correctAnswer: 'New balance', 
    options: ['New balance', 'Vans', 'DC'],
    image: '../html/style/images/nb.jpg'
  },
  { 
    question: 'Who is the skateboarding goat?', 
    correctAnswer: 'Aaron Kyro', 
    options: ['Tony Hawk', 'Ashton Kelley', 'Aaron Kyro'],
    image: '../html/style/images/aaron.jpg'
  },
  { 
    question: 'What trick has you jump and have the board spin 360 degrees under your feet?', 
    correctAnswer: 'Pop shuvit', 
    options: ['Kickflip', 'Heelflip', 'Pop shuvit'],
    image: '../html/style/images/popshuv.jpg'
  },
  { 
    question: 'Which skateboard component connects the wheels to the deck?', 
    correctAnswer: 'Trucks', 
    options: ['Bearings', 'Trucks', 'Grip tape'],
    image: '../html/style/images/trucks.jpg'
  },
  { 
    question: 'What is the trick called where a skateboarder grinds on a rail using both trucks?', 
    correctAnswer: '50-50 grind', 
    options: ['Boardslide', '50-50 grind', 'Nosegrind'],
    image: '../html/style/images/5050.jpg'
  },
  { 
    question: 'What\'s the stance when a skater rides with their right foot forward called?', 
    correctAnswer: 'Goofy', 
    options: ['Regular', 'Goofy', 'Switch'],
    image: '../html/style/images/goofy.jpg'
  },
  { 
    question: 'What is the flat part of a skateboard called?', 
    correctAnswer: 'The deck' 
  },
  { 
    question: 'What is used to roll?', 
    correctAnswer: 'The wheels' 
  },
  { 
    question: 'What do you call the black, rough layer?', 
    correctAnswer: 'Grip tape' 
  },
  { 
    question: 'What is it called when you go down a hill/slope?', 
    correctAnswer: 'Bombing a hill' 
  },
  { 
    question: 'What do you call the metal part that holds your wheels?', 
    correctAnswer: 'The trucks' 
  },
];

let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('questiontext').innerHTML = currentQuestion.question;
  document.getElementById('image').src = currentQuestion.image || '';  // Image is set here for each question
  
  if (currentQuestion.options) {
    document.getElementById('openended-ctn').style.display = 'none';
    document.getElementById('options-ctn').style.display = 'block';
    document.getElementById('option1').innerHTML = currentQuestion.options[0];
    document.getElementById('option2').innerHTML = currentQuestion.options[1];
    document.getElementById('option3').innerHTML = currentQuestion.options[2];
  } else {
    document.getElementById('options-ctn').style.display = 'none';
    document.getElementById('openended-ctn').style.display = 'block';
  }
}

function handleOptionClick(option) {
  const currentQuestion = questions[currentQuestionIndex];
  if (option === currentQuestion.correctAnswer) {
    correctCount++;
  } else {
    wrongCount++;
  }

  nextQuestion();
}

function handleOpenEndedSubmit() {
  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = document.getElementById('openended-answer').value.trim();
  
  if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
    correctCount++;
  } else {
    wrongCount++;
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('questioncontainer').style.display = 'none';
  document.getElementById('results-container').style.display = 'block';
  document.getElementById('score').innerHTML = `Your score: ${correctCount} / ${questions.length}`;
  document.getElementById('correct-answers').innerHTML = `Correct: ${correctCount}`;
  document.getElementById('wrong-answers').innerHTML = `Wrong: ${wrongCount}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  document.getElementById('questioncontainer').style.display = 'block';
  document.getElementById('results-container').style.display = 'none';
  loadQuestion();
}

document.getElementById('option1').onclick = () => handleOptionClick(document.getElementById('option1').innerHTML);
document.getElementById('option2').onclick = () => handleOptionClick(document.getElementById('option2').innerHTML);
document.getElementById('option3').onclick = () => handleOptionClick(document.getElementById('option3').innerHTML);
document.getElementById('submit-answer').onclick = handleOpenEndedSubmit;

loadQuestion();
