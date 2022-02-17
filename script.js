function Game(){
  const rockBtn = document.querySelector('.rock-btn');
  const paperBtn = document.querySelector('.paper-btn');
  const scissorsBtn = document.querySelector('.scissors-btn');
  const resetBtn = document.querySelector('.reset');

  const titleClass ='.result-title';
  const subtitileClass = '.result-subtitile';
  const playerScoreClass = '.player-score';
  const computerScoreClass = '.computer-score';
  const playerChoiceClass = '.player-img';
  const computerChoiceClass = '.computer-img';
  const gameResultClass = '.game-result';
  const resultWindownClass = '.overlay';



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
    if(score.player===5){
      showWiner(true)
    }
    else if(score.computer===5){
      showWiner(false);
    }
  }

  function playRound(player, computer){
    const isWin = {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper"
    }

    if(player === computer){
      showRoundResult("It's a Draw!",`${player} and ${computer}`);
      showScore(player, computer);
    }
    else if(isWin[player]===computer){
      score.player++;
      showRoundResult("You Win!",`${player} beats ${computer}`);
      showScore(player, computer);
    }
    else{
      score.computer++;
      showRoundResult("You Lose!",`${computer} and ${player}`);
      showScore(player, computer);
    }
  }


  function computerPlay (){
    const arr = ['Rock','Paper','Scissors'];
    return arr[Math.floor(Math.random()*3)];
  }

  function showRoundResult(title, subtitle){
    const resultTitle = document.querySelector(titleClass);
    const resultSubtitile = document.querySelector(subtitileClass);

    resultTitle.textContent = title;
    resultSubtitile.textContent = subtitle;
  }

  function showScore(player, computer){
    const playerScore = document.querySelector(playerScoreClass);
    const computerScore = document.querySelector(computerScoreClass);
    const playerChoice = document.querySelector(playerChoiceClass);
    const computerChoice = document.querySelector(computerChoiceClass);
    
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
    const gameResult = document.querySelector(gameResultClass);
    const resultWindown = document.querySelector(resultWindownClass);


    gameResult.textContent = winner ? 'You Win!' : 'You Lose!';
    resultWindown.classList.add('show');
  }

  function reset(e){
    e.preventDefault();
    document.location.reload();
  }

}

window.onload = Game();