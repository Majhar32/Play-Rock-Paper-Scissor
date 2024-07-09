let userCount=0;
let compCount=0;
let choices=document.querySelectorAll(".choice");
let users=document.querySelector("#users");
let comps=document.querySelector("#comps");
let result=document.querySelector("#rslt");
let compChoiceGen=()=>{
    let list=["Rock","Paper","Scissor"]
    let compChoice=Math.floor(Math.random()*3);
    return list[compChoice];
}
let playGame=(userChoice)=>{
    let compChoice=compChoiceGen();
    if(userChoice===compChoice){
        gameDraw();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper"?false:true;
        }else if(userChoice==="Paper"){
            userWin=compChoice==="Rock"?true:false;
        }else{
            userWin=compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
let gameDraw=()=>{
    result.innerText="This Game Was Draw!";
    result.style.backgroundColor="black";
}
let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userCount++;
        users.innerText=userCount;
        result.innerText=`Your ${userChoice} Beats ${compChoice}`;
        result.style.backgroundColor="green";
    }else{
        compCount++;
        comps.innerText=compCount;
        result.innerText=`${compChoice} Beats Your ${userChoice}`;
        result.style.backgroundColor="red";
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});