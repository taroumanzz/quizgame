'use strict'; 

{
  const quiz = [
    {
      question: "Q1. 次のうち、ポケモンの名前はどれ？",
      answers: [
        "イワ",
        "ピィ",
        "アモ",
        "ニン",
      ],
      correct: "ピィ"
    },
    {
      question: "Q2. 次のうち、ポケモンのわざはどれ？",
      answers: [
        "なく",
        "ねる",
        "あくび",
        "はしる",
      ],
      correct: "あくび"
    },
    {
      question: "Q3. 次のうち、ポケモンのタイプはどれ？",
      answers: [
        "あく",
        "あくま",
        "てんし",
        "デビル",
      ],
      correct: "あく"
    },
    {
      question: "Q4. 次のうち、まぼろしのポケモンはどれ？",
      answers: [
        "ウルガモス",
        "ミュウ",
        "ウィンディ",
        "サンダー",
      ],
      correct: "ミュウ"
    }
  ];




  const q = document.getElementById('q');
  const answer = document.getElementsByClassName("btn");
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');

  let k = 0;
  let c = 0;

  q.textContent = quiz[k].question;
  
  for (let i = 0; i < answer.length; i++){
    answer[i].addEventListener('click', () => {
      if (answer[i].textContent === quiz[k].correct) {
        window.alert("正解！");
        c++;
      } else {
        window.alert("残念！");
      }
      k++;

      if (k < quiz.length){
        setQuiz();
      } else {
        resultShow();
        k = 0;
        c = 0;

        mask.addEventListener('click', () => {
          closeModalwindow();
        });
        close.addEventListener('click', () => {
          mask.click();
        });

        setQuiz();
      }
      
      
    });
  };
  
  function setQuiz (){
    q.textContent = quiz[k].question;
    for (let i = 0; i < answer.length; i++){
      answer[i].textContent = quiz[k].answers[i];
    }
  }
  
  function resultShow (){
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    // document.getElementById('modal').classList.add('appearance');
    document.getElementById('result').textContent =  `終了ですよ！正解数は ${c}問/${quiz.length}問中でした！`;
  }

  function closeModalwindow (){
    mask.classList.add('hidden');
    modal.classList.add('hidden');
  }




}