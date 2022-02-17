function Game(){
  const rockBtn = document.querySelector('.rock-btn');
  const paperBtn = document.querySelector('.paper-btn');
  const scissorsBtn = document.querySelector('.scissors-btn');
  const resetBtn = document.querySelector('.reset');


  const score = {
    player: 0,
    computer: 0
  };

  rockBtn.addEventListener('click',play);
  paperBtn.addEventListener('click',play);
  scissorsBtn.addEventListener('click',play);
  resetBtn.addEventListener('click',reset);


  function play(){
    const player = this.value;
    const computer = computerPlay();
    playRound(player, computer);
    showScore(player, computer);
    if(score.player===5){
      showWiner(true)
    }
    else if(score.computer===5){
      showWiner(false);
    }
  }

  function playRound(player, computer){
    const resultTitle = document.querySelector('.result-title');
    const resultSubtitile = document.querySelector('.result-subtitile');


    const isWin = {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper"
    }

    if(player === computer){
      resultTitle.textContent = "It's a Draw!";
      resultSubtitile.textContent = `${player} and ${computer}`;
      return 'draw';
    }
    else if(isWin[player]===computer){
      score.player++;
      resultTitle.textContent = "You Win!";
      resultSubtitile.textContent = `${player} and ${computer}`;
      return 'win'
    }
    else{
      score.computer++;
      resultTitle.textContent = "You Lose!";
      resultSubtitile.textContent = `${computer} and ${player}`;
      return 'lose'
    }
  }


  function computerPlay (){
    const arr = ['Rock','Paper','Scissors'];
    return arr[Math.floor(Math.random()*3)];
  }

  function showScore(player, computer){
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    const playerChoice = document.querySelector('.player-img');
    const computerChoice = document.querySelector('.computer-img');
    
    const imgSrc = {
      Rock: "./img/rock.png",
      Paper: "./img/file.png",
      Scissors: "./img/scissors.png"
    }

    playerChoice.src = imgSrc[player];
    computerChoice.src = imgSrc[computer];

    playerScore.textContent = `Player: ${score.player}`;
    computerScore.textContent = `Computer: ${score.computer}`;
  }

  function showWiner(winner){
    const gameResult = document.querySelector('.game-result');
    const resultWindown = document.querySelector('.overlay');


    gameResult.textContent = winner ? 'You Win!' : 'You Lose!';

    resultWindown.classList.add('show');
  }

  function reset(e){
    e.preventDefault();
    document.location.reload();
  }

}

Game();