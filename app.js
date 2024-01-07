let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "blue"]

let started = false;

let level = 0;
let h2 = document.querySelector("h2");

// document.addEventListener("keypress",function(){
//     if(started == false){
//         console.log("Game Started");
//         started = true;

//         levelUP();
//     }
// });

let startBtn=document.querySelector(".start");
startBtn.addEventListener("click",function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUP();
    }
});

function levelUP(){
    userSeq=[];
    
    level++;
    h2.innerText=`Level-${level}`;

    let randIdx = Math.floor(Math.random()*4);
    console.log(randIdx);
    let randClr = btns[randIdx];
    // let randBtn = document.querySelector(`#${randClr}`);
    let randBtn = document.getElementById(randClr);

    // console.log(randIdx);
    // console.log(randClr);
    // console.log(randBtn);

    gameSeq.push(randClr);
    console.log(gameSeq);
    // console.log("after"+userSeq);

    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    
    setTimeout(function(){
        btn.classList.remove("user-flash");
    },200);
}

let allBtns = document.querySelectorAll(".btn")

function btnPressed(){
        // console.log("btn was pressed")
        // console.log(this);

        let btn = this;
        userFlash(btn);
        let userColor = btn.getAttribute("id");
        console.log(userColor);
        userSeq.push(userColor);
        // console.log("btnpress->"+userSeq);

        checkAns(userSeq.length-1);
    }


function checkAns(idx){
    // console.log("curr lvl="+level);
    // let idx=level-1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP,500);
        }
    }
    else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br>Press START to start again`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "rgb(70, 101, 150)";
        },100)
        reset();
    }
}
for (btnn of allBtns){
    btnn.addEventListener("click",btnPressed);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}