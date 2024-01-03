let userscore =0;
let computerscore =0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const us= document.querySelector("#user-score")
const cs= document.querySelector("#computer-score")


const gencomputerchoice=(computerchoice)=>{
    const options=["rock","paper","scissor"];
    const randomidx= Math.floor (Math.random()*3);
    return options[randomidx];
}


const winner= (userwin,userchoice,computerchoice)=>{
    if(userwin){
        
        userscore++;
        us.innerText= userscore;
        msg.innerText = `You win! your ${userchoice} beats ${computerchoice}`
        msg.style.backgroundColor="rgb(13, 58, 13)";
        

    }else{
        computerscore++;
        cs.innerText= computerscore;
        msg.innerText = `You lose! ${computerchoice} beats  your ${userchoice}`
        msg.style.backgroundColor="rgb(134, 19, 19)";
        
    }
}

const playgame =(userchoice) =>{
    const computerchoice=gencomputerchoice();
    if (userchoice=== computerchoice) {
        msg.innerText = "game was draw try again!";
        msg.style.backgroundColor="rgb(27, 6, 12)";
    }
    else{
        let userwin= true;
        if(userchoice ===rock){//scissor paper
            userwin= computerchoice =="paper" ?false:true;
        }
        else if(userchoice===paper){//rock scissor
            userwin= computerchoice ==="scissor" ?false:true;
        }
        else{ //rock paper
            userwin= computerchoice ==="rock" ?false:true;
        }
        winner(userwin, userchoice,computerchoice);
    }
};




choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    }); 
});




