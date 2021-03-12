function convert(arg1,arg2,arg3){
    let num1 = Number(arg1);
    let vhod = arg2; 
    let izhod = arg3;
    let merna = num1;
    if(vhod == "mm" ){
        merna = num1 / 1000;
    }
    else if(vhod == "cm"){
        merna = num1 / 100;
    }
    if (izhod == "cm") {
        console.log((merna * 100).toFixed(3));
    }
    else if(izhod == "mm"){
        console.log((merna * 1000).toFixed(3));
    }
    else {
        console.log(merna.toFixed(3));
    }
}
convert("12", "m", "m");

