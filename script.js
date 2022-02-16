function computerPlay (){
  const arr = ['Rock','Paper','Scissors'];
  return arr[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase().trim();
  const computer = computerSelection.toLowerCase().trim();

  return roundResult(player,computer);
}

function roundResult(player, computer){
  if(player === computer)
    return 'draw';

  const isWin = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  }

  return isWin[player]===computer ? 'win' : 'lose';

}

function game(){
  const score = {
    player: 0,
    computer: 0
  };

  for(let i = 0; i<5; i++){
    let playerSelection = prompt('Rock Paper Scissors?','Rock');
    let roundResult = playRound(playerSelection,computerPlay());
    switch(roundResult){
      case 'win':
        score.player++;
        break;
      case 'lose':
        score.computer++;
        break;
    }

    console.log(`Player: ${score.player} - Computer: ${score.computer}`);
  }

  if(score.player>score.computer){
    console.log(`You Win! Player: ${score.player} - Computer: ${score.computer}`);
  }
  else if(score.player<score.computer){
    console.log(`You Lose! Player: ${score.player} - Computer: ${score.computer}`);
  }
  else{
    console.log(`Draw! Player: ${score.player} - Computer: ${score.computer}`);
  }

}

// game();