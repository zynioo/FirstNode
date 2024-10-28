let i=1;
let interval = setInterval(()=>{
    let date = new Date();

    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.clear();
    console.log(time);
},1000)