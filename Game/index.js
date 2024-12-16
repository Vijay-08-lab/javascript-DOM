// rock paper sisscor game starts
let playermode = confirm("please confirm your choice are you really wants to play with us!")
if(playermode){
    let playerchoice = prompt("choose your choice")
    if (playerchoice){
        let playerc = playerchoice.trim().toLowerCase();
      if(  playerc === "rock" ||
        playerc === "sisscor" ||
        playerc === "paper"
    )
    {
        let computerchoice = Math.floor(Math.random()*3+1);
        let computer =
        computerchoice === 1 ? "rock": computerchoice === 2 ? "sisscor": "paper"
        let result = playerc === computer
        ? "Tie Game!"
        : playerc === "rock" && computer === "paper"
        ? `playerc:${playerc} computer: ${computer} Computer Wins!` :
        playerc === "paper" && computer === "sisscor"
        ? `playerc:${playerc} computer: ${computer} Computer Wins!` :
        playerc === "sisscor" && computer === "rock"
        ? `playerc:${playerc} computer: ${computer} Computer Wins!` :
        `playerc:${playerc} computer: ${computer} Player Wins!`
     alert(result);
     let playagain = confirm("play again?")
     playagain ? location.reload(): alert("Ok thanks for playing.")
    } else {
        alert("you didn't enter rock, paper, sisscor");
    }
    } else
    { alert('I gussed you change your mind. may be next time')
    }

} else {
    alert ('Ok may be next time')
}