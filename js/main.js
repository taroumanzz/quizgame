'use strict'; 

{
  // 問題・選択肢・正解を追加するだけでアプリ全体に反映されます。
  const quizzes = [
    {
      question: "次のうち、ポケモンのなまえはどれ？",
      answers: [
        "イワ",
        "ピィ",
        "アチャ",
        "ホー",
      ],
      correct: "ピィ"
    },
    {
      question: "次のうち、ポケモンのわざはどれ？",
      answers: [
        "なく",
        "ねる",
        "あくび",
        "はしる",
      ],
      correct: "あくび"
    },
    {
      question: "次のうち、ポケモンのタイプはどれ？",
      answers: [
        "あく",
        "あくま",
        "てんし",
        "デビル",
      ],
      correct: "あく"
    },
    {
      question: "次のうち、まぼろしのポケモンはどれ？",
      answers: [
        "ウルガモス",
        "ジラーチ",
        "ウィンディ",
        "サンダー",
      ],
      correct: "ジラーチ"
    },
    {
      question: "次のうち、ほのお・はがねタイプのポケモンはどれ？",
      answers: [
        "ハッサム",
        "ヒードラン",
        "ボルケニオン",
        "ジラーチ",
      ],
      correct: "ヒードラン"
    },
    {
      question: "次のうち、かならずつかまえられるモンスターボールは？",
      answers: [
        "マスターボール",
        "スーパーボール",
        "プレミアボール",
        "ハイパーボール",
      ],
      correct: "マスターボール"
    },
  ];

  const q = document.getElementById('q');
  const answer = document.getElementsByClassName("btn");
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');

  // 問題数をカウント
  let quizIndex = 0;
  // 正解数をカウント
  let correctIndex = 0;

  // 一問目からクイズをセット
  setQuiz();
  
  // 正誤判定をして正解数をカウント
  for (let i = 0; i < answer.length; i++){
    answer[i].addEventListener('click', () => {
      if (answer[i].textContent === quizzes[quizIndex].correct) {
        window.alert("正解！その調子です。");
        correctIndex++;
      } else {
        window.alert("残念！でも次はきっと大丈夫！");
      }
      quizIndex++;

      // 全問題に回答していたら結果を表示
      if (quizIndex < quizzes.length){
        setQuiz();
      } else {
        showResult();
        quizIndex = 0;
        correctIndex = 0;

        // 結果をモーダルウィンドウで表示
        mask.addEventListener('click', () => {
          closeModalwindow();
        });
        close.addEventListener('click', () => {
          mask.click();
        });

        setQuiz();
      }
    });
  }
  
  // 次の問題を表示
  function setQuiz (){
    q.textContent = `Q${quizIndex + 1}. ${quizzes[quizIndex].question}`;
    // for (let i = 0; i < answer.length; i++){
    //   answer[i].textContent = quizzes[quizIndex].answers[i];
    // }
    quizzes[quizIndex].answers.forEach((ans, index) => {
      answer[index].textContent = ans;
    });
  }
  
  // モーダルウィンドウで結果発表
  function showResult (){
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    document.getElementById('result').textContent =  `終了です！正解数は ${correctIndex}問/${quizzes.length}問中でした！`;
  }

  // モーダルウィンドウを閉じる
  function closeModalwindow (){
    mask.classList.add('hidden');
    modal.classList.add('hidden');
  }
}