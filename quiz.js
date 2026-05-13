const quesJSON = [
  {
    correctAnswer: 'RaandCB',
    options: ['RBC', 'HaarCB', 'RCB', 'RaandCB'],
    question:
      "Which team holds the unique record of finishing an entire innings with a score that wouldn't even qualify as a personal half-century for a single batsman?",
  },
  {
    correctAnswer: 'Rajasthan Royals',
    options: [
      'Rajasthan Royals',
      'Royal Challenger Bengaluru'
    ],
    question:
      'Who are the real Royals?',
  },
  {
    correctAnswer: 'Ben Cutting',
    options: [
      'Albie Morkel',
      'Ben Cutting',
      'Bhuvneshwar Kumar',
      'MS Dhoni',
    ],
    question:
      'Which player is also known as "Father of RCB" ?',
  },
  {
    correctAnswer: 'Calculator',
    options: [
      'Calculator',
      'Handkerchief',
      'Bat',
      'Ball',
    ],
    question: 'Which is the most used thing by RCB fans?',
  },
  {
    correctAnswer: 'Bangles',
    options: [
      'Bangles',
      'KKR Jersey',
      'SRH Jersey',
      'Prison Uniform',
    ],
    question:
      "What are male RCB fans most commonly seen wearing?",
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