// 记录对局结果和积分
let gameHistory = [];
let computerScore = 0;
let playerScore = 0;

// 获取电脑随机出拳
function getComputerGesture() {
  const gestures = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * gestures.length);
  return gestures[randomIndex];
}

// 更新电脑出拳图片
function updateComputerGesture(gesture) {
  const computerImg = document.getElementById('computer-img');
  computerImg.src = `${gesture}.png`;
}

// 判断胜负并更新积分和结果展示
function updateResult(playerGesture, computerGesture) {
  let resultText = "";
  if (playerGesture === computerGesture) {
    resultText = "平局";
  } else if (
    (playerGesture === "rock" && computerGesture === "scissors") ||
    (playerGesture === "paper" && computerGesture === "rock") ||
    (playerGesture === "scissors" && computerGesture === "paper")
  ) {
    resultText = "你赢了！";
    playerScore++;
  } else {
    resultText = "电脑赢了！";
    computerScore++;
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerText = resultText;

  const computerScoreSpan = document.getElementById('computer-score');
  computerScoreSpan.innerText = computerScore;

  const playerScoreSpan = document.getElementById('player-score');
  playerScoreSpan.innerText = playerScore;
  
  // 记录对局历史
  gameHistory.push(resultText);
  const gameHistoryList = document.getElementById('game-history');
  const listItem = document.createElement('li');
  listItem.innerText = resultText;
  gameHistoryList.appendChild(listItem);
}

// 选择出拳
function chooseGesture(gesture) {
  const computerGesture = getComputerGesture();
  updateComputerGesture(computerGesture);
  updateResult(gesture, computerGesture);
}