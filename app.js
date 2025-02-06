let gameSeq = [];// track the color which we are using 
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","blue","green","yellow"];

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

document.addEventListener("keypress",function(){
    if (started == false)
    {
        console.log ("Game started!");
        started = true;
        levelup();
    }
});
 
function levelup(){
    userSeq = [];//to make user input all the values again
    level++;
    h2.innerText = `Level ${level}`;
    // random button flash
    let randindx = Math.floor(Math.random() * 3);
    let randcol = btns[randindx];
    let randbtn = document.querySelector(`.${randcol}`);
    gameSeq.push(randcol);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkPress(idx)
{
// let idx = level-1;
if (gameSeq[idx] === userSeq[idx])// do case honge either we are checking middle value or last value
{
if (gameSeq.length==userSeq.length)
{
   setTimeout (levelup(),1000);
}
}else {
    h2.innerHTML = `Game over your score was <b>${level} !!</b> <br/>Press any key to start !!`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "beige";
    },200);
    reset();
}
} 

function btnPress(){
   let btn = this;
   userFlash(btn);
   let userCol = btn.getAttribute("id");
   userSeq.push(userCol);
   console.log(userSeq);
   checkPress(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset(){// to reintialize everthing
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}