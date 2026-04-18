const questions = [
    {
        question: "India first open Ai is called",
        answers: ["Sarvam", "Deepseek", "Chatgpt", "Claude"],
        correct: 0
    },
    {
        question: "Which language runs in browser?",
        answers: ["Python", "Java", "C++", "JavaScript"],
        correct: 3
    },
    {
        question: "Stack based on priciple of?",
        answers: ["LIFO", "FIFO", "SISO", "PIPO"],
        correct: 0
    }
];

let score=0;
let Cquestion=0;

const question=document.querySelector(".quiz");
const answer=document.querySelectorAll(".opt");
const nextQuestion=document.querySelector("#nextbtn");


While true{
function loadQuestion(){
let q=questions[Cquestion];
question.innerText+=q.question;

answer.forEach((btn,index)=>{
    btn.innerText+=q.answers[index];
    btn.onclick=()=>checkAnswer(index);
});
}


function checkAnswer(index){
    if(index===questions[Cquestion].correct){
        score++;
        alert("Answer is correct");
    }
    else{
        alert("Wrogn answer,pls try again");
    }
}

nextQuestion.onclick = () => {
    Cquestion++;
    if (Cquestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz finished! Your score: " + score);
    }
};

loadQuestion();}