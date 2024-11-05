let human_score = 0;
let computer_score = 0;
function getComputerChoice(){
    let choice = Math.random() * 3;
    if(choice < 1)
    {
        choice = "rock";
    }
    else if(choice < 2)
    {
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;
}
function getHumanChoice(){
    let choice = prompt("rock, paper, or scissors?")
    choice = choice.toLowerCase();
    while(choice != "rock" && choice != "paper" && choice != "scissors")
    {
        choice = prompt("please choose either rock, paper, or scissors");
    }
    return choice;
}
function playRound(human_choice, computer_choice){
if(human_choice == "rock")
{
    if(computer_choice == "rock")
    {
        console.log("its a tie");
    }
    if(computer_choice == "paper")
    {
        console.log("computer wins");
        computer_score++;
    }
    if(computer_choice == "scissors")
    {
        console.log("player wins");
        human_score++;
    }
}
if(human_choice == "paper")
{
    if(computer_choice == "rock")
    {
        console.log("player wins");
        human_score++;
    }
    if(computer_choice == "paper")
    {
        
        console.log("its a tie");
    }
    if(computer_choice == "scissors")
    {
        console.log("computer wins");
        computer_score++;
        
    }
}
if(human_choice == "scissors")
{
    if(computer_choice == "rock")
    {
        console.log("computer wins");
        computer_score++;
       
    }
    if(computer_choice == "paper")
    {
        console.log("player wins");
        human_score++;
        
    }
    if(computer_choice == "scissors")
    {
        console.log("its a tie");
        
    }
}

}
function playGame(){
    let i = 0;
    while( i < 5)
    {
        let human_choice = getHumanChoice();
        let computer_choice = getComputerChoice();
        playRound(human_choice, computer_choice);
        i = i+1;
    }
    if(computer_score > human_score)
    {
        console.log("the computer won");
    }
    if(computer_score < human_score)
    {
        console.log("the human won");
    }
    if(computer_score == human_score)
    {
        console.log("its a tie");
    }
}
playGame();

