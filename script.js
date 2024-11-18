let human_score = 0;
let computer_score = 0;

const container = document.querySelector(".container");
const output = document.createElement("div");
output.classList.add("output");
container.appendChild(output);
const buttons = document.querySelectorAll(".choice");
buttons.forEach(button =>{
button.addEventListener("click", () => {
    const h_choice = button.textContent;
    const c_choice = getComputerChoice();
    playRound(h_choice, c_choice);
});
});
const scores = document.createElement("div");
container.appendChild(scores);
function updateScores() {
    scores.textContent = `Human Score: ${human_score} Computer Score: ${computer_score}`;
}
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
function playRound(human_choice, computer_choice){
    human_choice = human_choice.toLowerCase()
if(human_choice == "rock")
{

    if(computer_choice == "rock")
    {
        output.textContent = "its a tie";
    }
    if(computer_choice == "paper")
    {
        output.textContent = "computer wins";
        computer_score++;
    }
    if(computer_choice == "scissors")
    {
        output.textContent = "player wins";
        human_score++;
    }
}
if(human_choice == "paper")
{
    if(computer_choice == "rock")
    {
        output.textContent = "player wins";
        human_score++;
    }
    if(computer_choice == "paper")
    {
        
        output.textContent = "its a tie";
    }
    if(computer_choice == "scissors")
    {
        output.textContent = "computer wins";
        computer_score++;
        
    }
}
if(human_choice == "scissors")
{
    if(computer_choice == "rock")
    {
        output.textContent = "computer wins";
        computer_score++;
       
    }
    if(computer_choice == "paper")
    {
        output.textContent = "player wins";
        human_score++;
        
    }
    if(computer_choice == "scissors")
    {
        output.textContent = "its a tie";
        
    }
}
updateScores();
if(computer_score >= 5)
{
    alert("The computer has won")
    computer_score = 0;
    human_score = 0;
    updateScores();
}
if(human_score >= 5)
{
    alert("The human has won")
    computer_score = 0;
    human_score = 0;
    updateScores();
}
}


