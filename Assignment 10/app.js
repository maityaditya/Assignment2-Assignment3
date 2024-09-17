function division(dividend,divisor){
    try{
        let ans=dividend/divisor;
        console.log(ans);
    }catch(e){
        console.log(e);
    }finally{
        console.log("i am in finally block and division operation get performed");
    }
}

division(10,0);
division(10,2);