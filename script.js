const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const scoreButton = document.getElementById('score-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-button")

let shuffledQuestions , currentQuestionIndex

startButton.addEventListener("click" , startQuiz)
nextButton.addEventListener("click", () =>{
    currentQuestionIndex ++
    setNextQuestion()
})

function startQuiz() {

    var timerEl = document.getElementById("timer")

    var secondsLeft = 20;

 function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft + " Time left! ";
        
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        } else {
            setNextQuestion.length === 0
        
        }   

    
    },1000);
}

setTimer();

function sendMessage (){
    timerEl.textContent = "Game Over, Play again?";
}
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide') 
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    })

}function resetState(){
    nextButton.classList.add ('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild (answerButtonElement.firstChild)
    }

}

function selectAnswer(e){
    const selectedButton = e.target
    const correct =selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
     } else{
         startButton.innerText = 'Restart'
         scoreButton.classList.remove('hide')
         startButton.classList.remove('hide')
    

     }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add ('correct')
    }else{
        element.classList.add ('wrong')

    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Cats like to swim?',
        answers: [
            {text: "No" , correct: true},
            {text:"Yes" , correct: false}
          ]
    },
    {
        question: 'Can all birds fly?',
        answers: [
            {text: "No", correct: true},
            {text: "Yes", correct: false}
        ]
    },
    {
        question: 'How many legs do Turtles have?',
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: true}
        ]
    },
    {
        question: 'What color tongue does a Giraffe have?',
        answers:[
            {text: "Pink", correct: false},
            {text: "Blue", correct: false},
            {text: "Purple", correct: false},
            {text: "Black", correct: true}
        ]
    },
    {
        question: 'Raccons are memembers of the canine famliy?',
        answers: [
            {text: 'Yes', correct: true},
            {text:'No', correct:false}
        ]
    }
 ]
