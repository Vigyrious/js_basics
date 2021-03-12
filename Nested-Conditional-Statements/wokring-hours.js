function storeHours(arg1,arg2) {
    let hours = Number(arg1);
    let days = String(arg2);
    if (hours >= 10 && hours <= 18 && days !== "Sunday") {
        console.log("open");
    }
    else {
        console.log("closed");
    }
}