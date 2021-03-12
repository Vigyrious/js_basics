function cinemaProfit (arg1,arg2,arg3) {
    let projType = String(arg1);
    let c = Number(arg2);
    let r = Number(arg3);
    let multi = r * c;
    let result = 0;
    if (projType === "Premiere") {
        result = multi * 12;
    }
    else if (projType === "Normal") {
        result = multi * 7.5;
    }
    else if (projType === "Discount") {
        result = multi * 5;
    }
    console.log(result.toFixed(2));
}