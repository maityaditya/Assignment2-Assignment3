let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let name=document.querySelector(".name");
    if(name.value==""){
        alert("Name cannot be empty");
    }else{
        console.log(name.value);
    }
    let email=document.querySelector(".email");
    if((!email.value.includes("."))||(!email.value.includes("@"))){
        alert("Email must contain . and @");
    }else{
        console.log(email.value);
    }
    let pass=document.querySelector(".password");
    if(pass.value.length<8 || !pass.match(/^[A-Z]/) || !password.match(/^[a-z]/) || !pass.match(/[^\w\d]/)){
        alert("Enter valid email format");
    }else{
        console.log(pass.value)
    }
})