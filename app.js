//1.Press any key on the keyboard and game will Start
//2.Flash a box and level up to 1 from 0
//3.Have 2 arrays: gameSequesnce[] and userPressedSequence
//4.Wheneevr user presses any button put a CHECK. compare 2 arrays. 
//5.If arrays are same Level up
//6.Else Game Over



let gameSequesnce=[];
let userPressedSequence=[];
let gameStarted=false;
let level=0;
let colors=["red","green","blue","yellow"]
let h2=document.querySelector("h2");

document.addEventListener("keypress", function (){
   
    if(gameStarted == false)
    {
        console.log("Game started");
        gameStarted=true;
        levelUp();
    }
});

function btnFlash(btn)
{
    
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function levelUp()
{
    userPressedSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranNum=Math.floor(Math.random()*3);
    let ranColor=colors[ranNum];
    let ranBtn=document.querySelector( `.${ranColor}`);
    // console.log(ranNum);
    // console.log(ranColor);
    // console.dir(ranBtn);
    //flash a random button

    gameSequesnce.push(ranColor);
    console.log(gameSequesnce);
    btnFlash(ranBtn);
}


function btnPress()
{
   
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userPressedSequence.push(userColor);
    checkAns(userPressedSequence.length-1);
    

}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function checkAns(idx)
{
    console.log("user: ",userPressedSequence[idx]);
    console.log("game: ",gameSequesnce[idx]);
   
    if(userPressedSequence[idx] === gameSequesnce[idx])
    {
        if(userPressedSequence.length == gameSequesnce.length)
        {
           setTimeout( levelUp ,1000);
           
        }
    }
    else{
        h2.innerText=`Game Over! Your score is ${level}, Press any key to Restart the game`;
        reset();
    }
}

function reset()
{
   
    gameSequesnce=[];
    userPressedSequence=[];
    gameStarted=false;
    level=0;
}