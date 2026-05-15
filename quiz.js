const quesJSON = [
  {
    correctAnswer: 'Sachin Tendulkar',
    options: ['Virat Kohli', 'Ricky Ponting', 'Sachin Tendulkar', 'Brian Lara'],
    question:
      "Who is the only cricketer to have scored one hundred international centuries?",
  },
  {
    correctAnswer: 'Winning a game of Cricket',
    options: [
      'Paying half the amount in advance',
      'Winning a game of Cricket',
      'Handing over half of their livestock to the Cantonment',
      'Winning a horse race'
    ],
    question:
      'In the movie Lagaan, what was the condition set by the British for waiving the agricultural tax?',
  },
  {
    correctAnswer: 'Amitabh Bachchan',
    options: [
      'Shah Rukh Khan',
      'Salman Khan',
      'Amitabh Bachchan',
      'Aamir Khan',
    ],
    question:
      'Which Bollywood actor is often referred to as the "Shahenshah of Bollywood"?',
  },
  {
    correctAnswer: 'India',
    options: [
      'Pakistan',
      'Australia',
      'India',
      'South Africa',
    ],
    question: 'Which country won the first-ever ICC T20 World Cup in 2007?',
  },
  {
    correctAnswer: 'Ajit Doval',
    options: [
      'Ajit Doval',
      'A.S. Dulat',
      'K.P.S. Gill',
      'Baman Rawat',
    ],
    question:
      "R. Madhavan plays a pivotal, high-ranking intelligence character named Ajay Sanyal, who serves as the Director of the Intelligence Bureau (IB). This character is heavily based on which real-life Indian security official?",
  },
];
    let score = 0;
    let currentQuestion = 0;
    const TotalScore = quesJSON.length;
      const questionEL = document.getElementById("question");
      const optionEL = document.getElementById("options");
       const scoreEL = document.getElementById("score");
       const nextEl = document.getElementById("next");
       showQuestion();
    nextEl.addEventListener("click",()=>{
   scoreEL.textContent = `Score : ${score}/${TotalScore}`;
   nextQuestion();
    })
    function showQuestion(){
      const {correctAnswer,options,question} = quesJSON[currentQuestion];
    questionEL.textContent = question;
      const shuffledOptions = ShuffleOptions(options);
    shuffledOptions.forEach ((opt) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      optionEL.appendChild(btn);
      
      btn.addEventListener("click", ()=>{
        if (opt === correctAnswer){
          score++;
        }
        else {
          score-=0.25;
        }
        scoreEL.textContent = `Score : ${score}`;
        nextQuestion();
      });
    });
    }
function nextQuestion(){
  currentQuestion++;
  optionEL.textContent = "";
  if (currentQuestion>= quesJSON.length){
    questionEL.textContent = "Quiz Completed!!";
    nextEl.remove();
  }
  else {
    showQuestion();
  }
}
    function ShuffleOptions(options){
      for (let i = options.length-1 ; i>=0 ; i--){
        const j = Math.floor(Math.random()*i+1);
      [options[i], options[j]] = [options[j],options[i]];
      }
      return options;
    }
