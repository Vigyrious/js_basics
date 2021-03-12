function whichone(num1,arg1) {
    let age = Number(num1);
    let sex = String(arg1);
    if (sex === "f"){
        if(age >= 16) {
            console.log("Ms.");
        }
        else {
            console.log("Miss");
        }
    }
    else {
        if(age >= 16) {
            console.log("Mr.")
        }
        else {
            console.log("Master")
        }
    }
}