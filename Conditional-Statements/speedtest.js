function speedtest(arg1) {

    let num1 = Number(arg1);

    if(num1 <= 10) {
        console.log("slow");
    }
    else if(num1 <= 50){
        console.log("average");
    }
    else if(num1 <= 150){
        console.log("fast");
    }
    else if(num1 <= 1000){
        console.log("ultra fast");
    }
    else{
        console.log("extremely fast");
    }
}