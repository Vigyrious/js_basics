function SecToMin(arg1,arg2,arg3) {
    let sec1 = Number(arg1);
    let sec2 = Number(arg2);
    let sec3 = Number(arg3);
    let min = Math.floor((sec1 + sec2 + sec3)/60);
    let sec = (sec1 + sec2 + sec3) % 60;
    if (sec < 10 ){
        console.log(`${min}:0${sec}`);
    }
    else {
        console.log(`${min}:${sec}`)
    }
    
}
SecToMin("5","5","55");