let i=1;
let interval = setInterval(()=>{
    let date = new Date();

    let time = date.toLocaleTimeString();
    console.clear();
    console.log(time);
},1000)