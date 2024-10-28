let i=1;
let interval = setInterval(()=>{
    console.log(i++);
    if(i>5){
        clearInterval(interval);
    }
},1000)