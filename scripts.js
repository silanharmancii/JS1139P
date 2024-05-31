let toplamA=0;
let toplamB=0;



let scoreA = document.getElementById("score-a");
let scoreB = document.getElementById("score-b");



function addFunctionA(){
    
    toplamA = toplamA+1;
    scoreA.innerHTML = "Skor: " +toplamA;
    
}
function subtractFunctionA(){
    let sayiA = toplamA;
    if(toplamA>0){
        sayiA= sayiA-1;
        scoreA.innerHTML= "Skor: " +sayiA;
        toplamA=sayiA;
    }
}
function updateScoreA(){
    let sayiScoreA = parseInt(window.prompt("Skor belirleyin:"));
    scoreA.innerHTML= "Skor: " +sayiScoreA;
    toplamA=sayiScoreA;
}

function updateNameA(){
    let name= prompt("İsim: ") 
    let nameA = document.getElementById("nameA");
    nameA.innerHTML=name;
}

function addFunctionB(){
    
    toplamB = toplamB+1;
    scoreB.innerHTML = "Skor: " +toplamB;
    
}
function subtractFunctionB(){
    let sayiB = toplamB;
    if(toplamB>0){
        sayiB= sayiB-1;
        scoreB.innerHTML= "Skor: " +sayiB;
        toplamB=sayiB;
    }
}
function updateScoreB(){
    let sayiScoreB = parseInt(window.prompt("Skor belirleyin:"));
    scoreB.innerHTML= "Skor: " +sayiScoreB;
    toplamB=sayiScoreB;
}

function updateNameB(){
    let name= prompt("İsim: ") 
    let nameB = document.getElementById("nameB");
    nameB.innerHTML=name;
}