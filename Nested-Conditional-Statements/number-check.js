function numCheck(arg1) {
    let num = Number(arg1);
    if (num <= 100 && num >= -100) {
        if (num != 0 ) {
            console.log("Yes");
        }
        else {
            console.log("No")
        }
    }
    else {
        console.log("No")
    }
}