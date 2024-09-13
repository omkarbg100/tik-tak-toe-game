let turn =true;
let a=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

function btnclicked(e){
    let y = String(e);
    let x=document.getElementById(y);
    if(turn){
        console.log(turn)
        turn=false;
        x.innerText="X";
        a[e-1]=0;
        x.style.color="red";
    }
    else{
        console.log(turn);
        turn=true;
        x.innerText="O";
        a[e-1]=1;
    }
    x.style.pointerEvents='none';
    checkwinner();
}
function checkwinner(){
    let m=document.querySelector(".message");
    console.log(a);
    let c=false
    let ans=0;
    let p;
    if(turn){
        p='O';
    }
    else{
        p='X';
    }
    if((a[0]==a[1] && a[0]==a[2] && a[0] != -1) || (a[3]==a[4] && a[3]==a[5] && a[3] != -1) || (a[6]==a[7] && a[6]==a[8] && a[6]!= -1) ){
        m.innerText=p+" YOU WON";
        document.querySelector(".div2").style.display="block";
        document.querySelector(".block-div").style.display="none";
        return;
    }
    if((a[0]==a[3] && a[0]==a[6] && a[0] != -1) || (a[1]==a[4] && a[1]==a[7] && a[1] != -1) || (a[2]==a[5] && a[5]==a[8] && a[2]!= -1) ){
        m.innerText=p+" YOU WON";
        document.querySelector(".div2").style.display="block";
        document.querySelector(".block-div").style.display="none";
        return;
    }
    if((a[0]==a[4] && a[4]==a[8] && a[0] != -1) || (a[2]==a[4] && a[4]==a[6] && a[2] != -1) ){
        m.innerText=p+" YOU WON";
        document.querySelector(".div2").style.display="block";
        document.querySelector(".block-div").style.display="none";
        return;
    }
    for(let i=0;i<9;i++){
        if(a[i] == -1){
            ans++;
        }
    }
    if(ans==0 ){
        m.innerText="DRAW!";
        document.querySelector(".div2").style.display="block";
        document.querySelector(".block-div").style.display="none";
    }
    
}
