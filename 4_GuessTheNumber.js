let min=1;
let max=100;

const random=parseInt(Math.random()*max +1);
const button=document.querySelector('#button');
const answerguess=document.querySelector('#answerguess');
const pguess=document.querySelector('#guess');
const chances=document.querySelector('#chances');
const p=document.createElement('p');

let arr=[];
let num=10;
button.addEventListener('click',(e) =>{
 e.preventDefault();

 if(num<=0){
    answerguess.innerHTML='You have exhausted your chances,refresh the page to try again'
     return;
}

    let inputValue = document.querySelector('#input').value;
    let guess = parseInt(inputValue);

if(guess===random){
    answerguess.innerHTML=`You Guessed the Right Number-${guess}`;
    chances.innerHTML=`Chances Remaining ${num}`

}
else if(guess<random){
    answerguess.innerHTML=`Guess a Number Higher`;
}
else if(guess>random){
    answerguess.innerHTML=`Guess a Lower Number`;
}
else{
    answerguess.innerHTML='You didnt enter a number';
}
if(!isNaN(guess)){
num--;
chances.innerHTML=`Chances Remaining ${num}`;
}

if(!isNaN(guess) && num>=0){
 arr.push(guess);
}
pguess.innerHTML=`Previous Guesses-${[...arr]}`

    });
