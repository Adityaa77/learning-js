 const form=document.querySelector('form');
 form.addEventListener('submit',(e)=>{
 e.preventDefault();

 const height=parseInt(document.querySelector('#height').value);
 const weight=parseInt(document.querySelector('#weight').value);
 const result=document.querySelector('#Result');

 if(height==='' || height<0 ||isNaN(height)){
    result.innerHTML='Please give a valid Height';
 }
 else if(weight==='' || weight<0 ||isNaN(weight)){
    result.innerHTML='Please give a valid weight';
 }
 else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){
        result.innerHTML=`<span>Your Bmi is ${bmi}
        You Are UnderWeight
        </span>`;
    }
    if(bmi>18.6 && bmi<24.6){
        result.innerHTML=`<span>Your Bmi is ${bmi}
        You Are Normal Weight
        </span>`;
    }
    if(bmi>24.6){
        result.innerHTML=`<span><pre>
    Your Bmi is ${bmi}
    You Are Over Weight</pre>
        </span>`;
    }
 }
 })