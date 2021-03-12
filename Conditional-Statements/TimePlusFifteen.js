function new_min (arg1,arg2) {
    let hour = Number(arg1);
    let min = Number(arg2) + 15;
    let sum = hour*60 + min;
    let new_hour = Math.floor(sum/60);
    let new_min = sum % 60;
    if (new_hour === 24){
        new_hour = 0;
    }
    if (new_min < 10) {
        console.log(`${new_hour}:0${new_min}`);
    }
    else{
        console.log(`${new_hour}:${new_min}`);
    }
}
new_min("1", "59");