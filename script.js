const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('qstn-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons')
const body=document.getElementById('body')

let shuffledQuestions,currentQuestionIndex;
let x = 1;
let count =0;

//start button function

startButton.addEventListener('click',startGame);

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=> Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

//next button function
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
    x++;
    setNextQuestion()
})

function setNextQuestion(){
    resetState()
    body.classList.add('neutral')
    body.classList.remove('correct')
    body.classList.remove('wrong')
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question)
{
    questionElement.innerText =x +")"+ question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer);
        answerButtons.appendChild(button)
    });    
}
function selectAnswer(e){
   
    const selectedButton = e.target;
    
    const correct = selectedButton.dataset.correct
    if(selectedButton.dataset.correct == "true"){
        count++
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (shuffledQuestions.length >currentQuestionIndex +1) {
         nextButton.classList.remove('hide');    
    }else{
        showScore(count);
        startButton.classList.remove('hide')
        questionContainerElement.classList.add('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function resetState(){
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showScore(count){
    alert("Your Score is :" +count);
}

//create questions
let questions = [
    {
        question :"what does html stands for?",
        answers : [
            {text : "HyperText and links Markup Language" , correct : true},
            {text : "hypertext markup language" , correct : false},
            {text : "HighText Machine Language" , correct :false},
            {text : "None of these" , correct :false}
        ]
    },{
        question :"Which of the following tag is used to insert a line-break in HTML??",
        answers : [
            {text : "<br>" , correct : true},
            {text : "<pre>" , correct : false},
            {text : "<b>" , correct :false},
            {text : "<a>" , correct :false}
        ]
    },{
        question :"<input> is ",
        answers : [
            {text : "a format tag." , correct : false},
            {text : "an empty tag" , correct : true},
            {text : "All of the above" , correct :false},
            {text : "None of the above" , correct :false}
        ]
    },{
        question :"Which of the following tag is used to add rows in the table?",
        answers : [
            {text : "<td> and </td>" , correct : false},
            {text : "<tr> and </tr>" , correct : true},
            {text : "<th> and </th>" , correct :false},
            {text : "None of the above" , correct :false}
        ]
    },{
        question :"If we want to wrap a block of text around an image, which css property will we use ?",
        answers : [
            {text : "wrap" , correct : false},
            {text : "push" , correct : false},
            {text : "float" , correct :true},
            {text : "align" , correct :false}
        ]
    },{
        question :"How can we write comment along with CSS code ?",
        answers : [
            {text : "<' a comment'>" , correct : false},
            {text : "// a comment //" , correct : false},
            {text : "/ a comment /" , correct :false},
            {text : "/* a comment */" , correct :true}
        ]
    },{
        question :"Which CSS property is used to control the text size of an element ?",
        answers : [
            {text : "font-style" , correct : false},
            {text : "font-size" , correct : true},
            {text : "text-size" , correct :false},
            {text : "text-style" , correct :false}
        ]
    }
];