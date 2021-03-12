function tradeCom(arg1,arg2) {
    let city = String(arg1);
    let sellAm = Number(arg2);
    let result = 0;
    if (city === "Sofia") {
        if (sellAm >= 0 && sellAm <= 500) {
            result = sellAm * 0.05;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 500 && sellAm <= 1000) {
            result = sellAm * 0.07;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 1000 && sellAm <= 10000) {
            result = sellAm * 0.08;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 10000 ) {
            result = sellAm * 0.12;
            console.log(result.toFixed(2));
        }
        else {
            console.log("error")
        }
    }
   else if (city === "Varna") {
        if (sellAm >= 0 && sellAm <= 500) {
            result = sellAm * 0.045;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 500 && sellAm <= 1000) {
            result = sellAm * 0.075;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 1000 && sellAm <= 10000) {
            result = sellAm * 0.1;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 10000 ) {
            result = sellAm * 0.13;
            console.log(result.toFixed(2));
        }
        else {
            console.log("error")
        }
    }
    else if (city === "Plovdiv") {
        if (sellAm >= 0 && sellAm <= 500) {
            result = sellAm * 0.055;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 500 && sellAm <= 1000) {
            result = sellAm * 0.08;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 1000 && sellAm <= 10000) {
            result = sellAm * 0.12;
            console.log(result.toFixed(2));
        }
        else if (sellAm > 10000 ) {
            result = sellAm * 0.145;
            console.log(result.toFixed(2));
        }
        else {
            console.log("error");
        }
    }
    else {
        console.log("error");
    }
}