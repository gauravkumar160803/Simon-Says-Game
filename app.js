let  gamesq=[];
let usersq=[];
let started=false;
let highscore=0;
let level=0;
let color=["red","yellow","purple","green"];
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        lvlup();
        started=true;
        }

});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};
function lvlup(){
    usersq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let rndidx=Math.floor(Math.random()*4);
    let rndclr=color[rndidx];
    gamesq.push(rndclr);
    let rndbtn=document.querySelector(`.${rndclr}`);
    btnflash(rndbtn);
};
function chkans(idxes){
    if(gamesq[idxes]==usersq[idxes]){
        if(gamesq.length===usersq.length){
            setTimeout(lvlup(),1000);
        }
    }else{
        if(level>highscore){
            highscore=level;
        }h3.innerHTML=`Game Over !!Your score was--<b>${level}</b></br>High Score--${highscore}</br>Press any key to restart ` ;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },150)
        
     }
    
};
function btnpress(){
    let btn=this;
    btnflash(btn);
     userclr=btn.getAttribute("id");
     usersq.push(userclr);
    chkans(usersq.length-1);
};
let allbtn=document.querySelectorAll(".btn");
for(b of allbtn){
    b.addEventListener("click",btnpress);
};
function reset(){
    started=0;
    gamesq=[];
    usersq=[];
    level=0;
}