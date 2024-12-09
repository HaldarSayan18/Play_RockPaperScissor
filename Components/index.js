let userScore1 = 0
let compScore1 = 0

//"choice" is the className
const choose = document.querySelectorAll(".choice");
const msg_container = document.querySelector("#msg-container");
//'msg' is id
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const userName = document.getElementById("userName");
const user = prompt('Enter your name: ');
if (user) {
    userName.innerHTML = user;
} else {
    userName.innerHTML = "you";
}
console.log('name->', user);


const compOpt = () => {
    const opt = ['rock', 'paper', 'scissor']
    //random function to choose option randomly
    let numOfIndex = 3
    const randomId = Math.floor(Math.random() * numOfIndex)
    return opt[randomId]
}

const winner = (userWin, userChoice, compChoice)=>{
    if (userWin) {
        userScore1++;
        userScore.innerHTML = userScore1;
        msg.innerHTML = (`${user} won! and ${userChoice} beats ${compChoice}!`)
        msg_container.style.backgroundColor = "green"
        msg.style.color = "white"
    } else {
        compScore1++;
        compScore.innerHTML= compScore1;
        msg.innerHTML = (`${user} losed and ${compChoice} beats ${userChoice}!`)
        msg_container.style.backgroundColor = "red"
        msg.style.color = "white"
    }
}

const play = (userChoice) => {
    console.log('user choice -> ', userChoice);
    //generating computer choice
    const compChoice = compOpt()
    console.log('comp choice -> ', compChoice);
    console.log('----------------------<>----------------------');
    
    if (userChoice === compChoice) {
        msg.innerHTML = (`game draw`)
        msg_container.style.backgroundColor = "yellow"
        msg.style.color = "black"
    } else {
        let userWin = true
        if (userChoice === 'rock') {
            //paper, scissor
            userWin = compChoice === 'paper' ? false : true
        } else if (userChoice === 'paper') {
            //rock, scissor
            userWin = compChoice === 'scissor' ? false : true
        } else {
            //rock, paper
            userWin = compChoice === 'rock' ? false : true
        }
        winner(userWin, userChoice, compChoice);
    }
}


//loop for event listener
choose.forEach((choice) => {
    console.log('choices=>', choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice)
    })
})