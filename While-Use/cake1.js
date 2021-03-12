function cake(arg1) {
    let ms = Number(arg1[0]) * Number(arg1[1]);
    let i =2;
    let isEnough=false;
    while (arg1[i] !== "STOP"){
        ms -= arg1[i];
        if (ms < 0){
            break;
        }
        i++;
    }
    if(ms >=0) {
        console.log(`${ms} pieces are left.`)
    }
    else {
        console.log(`No more cake left! You need ${Math.abs(ms)} pieces more.`)
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
