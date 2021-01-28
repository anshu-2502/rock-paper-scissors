const game=()=>{
 let pScore=0;
 let cScore=0;

 //starting the game
 const startGame=()=>{
     const playBtn=document.querySelector('.intro button');
     const introScreen=document.querySelector('.intro');
     const match=document.querySelector('.match');

     playBtn.addEventListener('click',()=>{
         introScreen.classList.add('fadeOut');
         match.classList.add('fadeIn');

     });
 };
 //play
 const playMatch=()=>{
     const options=document.querySelectorAll('.options button');
     const playerHand=document.querySelector('.player-hand');
     const computerHand=document.querySelector('.computer-hand');
     //computer options:
     const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
          //shaking the hands
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";

        

    });
});
};
const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
const compareHands=(playerChoice, computerChoice)=>{
    const winner=document.querySelector('.winner');
    if(playerChoice===computerChoice){
        winner.textContent='It is a Tie!';
        return;

    }
    //rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      // Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      // Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }


}

     
 };

//call the inner functions
startGame();
playMatch();
// updateScore();

};

//start the game
game();
