document.addEventListener('DOMContentLoaded', function() {
    let infoBlock = document.getElementById('info');
    let closeButton = document.getElementById('close');
    let quizChoices = document.getElementById('box');

    closeButton.addEventListener('click', function() {
        infoBlock.classList.add('hidden');
        quizChoices.style.display = 'block';
    });

    // Initially hide the quiz choices
    quizChoices.style.display = 'none';
});