let height=document.querySelector("#getHeight");
let weight=document.querySelector("#getWeight");
let pointer=document.querySelector(".img");
function changePointer(res){
    if(res<=18.5){
        pointer.classList.add("underweight");
    }else if(res<=24.9){
        pointer.classList.add("normal");
    }else if(res<=29.9){
        pointer.classList.add("overweight");
    }else if(res<=34.9){
        pointer.classList.add("obese");
    }else{
        pointer.classList.add("extermelyobese");
    }
}

let calBtn=document.querySelector("#Calculate");
calBtn.addEventListener("click",()=>{
    
    let heightres=parseFloat(parseInt(height.value)/100);
    let weightres=parseInt(weight.value);
    let res=(weightres/heightres**2);
    let h2=document.querySelector(".first-result");
    h2.innerText="Result:BMI is "+res;

    changePointer(res);
})

let clear=document.querySelector("#Clear");
clear.addEventListener("click",()=>{
    height.value="";
    weight.value="";
    pointer.setAttribute("class","reset");
    let h2=document.querySelector(".first-result");
    h2.innerText="Result:BMI is 0";
})