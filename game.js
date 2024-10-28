console.log("JS start");
let scr=document.querySelector(".scr"); //score element
let hscr=document.querySelector(".hscr");//highest score element
let score=0;
let Hscore=0;
// let cur_seq;
let seq=[]; // Game sequnce
let btn=["d1", "d2", "d3", "d4"];
let start=false;
let sbtn=document.querySelector(".Sbtn");
// starting or ending the game

sbtn.addEventListener("click", function(){
    if(start==false)
        {
            sbtn.classList.add("leave");
            sbtn.innerText="Leave";
            scr.innerText="Score : 0";
            start=true;
            // console.log("level up");
            // flash(sbtn);
        levelup();
    }
    else
    {
        sbtn.classList.remove("leave");
        sbtn.innerText="Start";
        if(Hscore<score){
            Hscore=score-1;
            hscr.innerText="Highiest Score: "+Hscore;
        }
        score=0;
        start=false;
    }
});

let index=0
function match(clickedbtn){
if(!(clickedbtn==seq[index]))
{
    console.log("game over")
}
else{
index++;
if(index==seq.length)
    {
    console.log("good");
    levelup();
    index=0;
}
}
}


function flash(bt){
    bt.classList.add("flash");
    // console.log("flash");
    setTimeout(function(){
       bt.classList.remove("flash");
    }, 100);

}
function levelup(){
    scr.innerText="Score : "+score;
    score++;
    let random=Math.floor(Math.random()*3);
    let rndmclr=btn[random];
    seq.push(rndmclr);
    let  fbtn=document.querySelector(`.${rndmclr}`);
    // console.log(fbtn, rndmclr);
    flash(fbtn);
}
