let output=document.querySelector(".output-screen");
output.innerText="";
let keypads=document.querySelectorAll(".keypads")

for(let keypad of keypads){
    keypad.addEventListener("click",()=>{
        if(keypad.innerText=="AC"){
            output.innerText="";
        }else if(keypad.innerText=="="){
            try{
                output.innerText=eval(output.innerText);
            }catch(e){
                output.innerText="ERROR";
            }
        }else if(keypad.innerText=="+/-"){
            output.innerText="-";
        }
        else{
            if(keypad.innerText=="÷"){
                output.innerText+="/";
            }else if(keypad.innerText=="X"){
                output.innerText+="*";
            }
            else{
                let val=keypad.innerText;
                output.innerText+=val;
            }
            
            
        }
        
    })
}
