function WhereIsNumber(arg1) {
    let num1 = Number(arg1);

    if(num1 > 200) {
        console.log("Greater than 200");
    }
    else if (num1 < 100){
        console.log("Less than 100");
    }
    else {
        console.log("Between 100 and 200");
    }
}