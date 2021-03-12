function trip(arg1,arg2) {
    let budget = Number(arg1);
    let season = String(arg2);
    let type = "";
    let newB = 0;
    let where = "";
    if (season === "summer" && budget <= 1000) {
        type = "Camp";
    }
    else {
        type = "Hotel";
    }


    if (budget <= 100) {
        where = "Bulgaria";
        if (season === "summer") {
            newB = budget * 0.3;
        }
        else {
            newB = budget * 0.7;
        }
    }
    else if (budget <= 1000) {
        where = "Balkans";
        if (season === "summer") {
            newB = budget * 0.4;
        }
        else {
            newB = budget * 0.8;
        }
    }
    else if (budget > 1000) {
        where = "Europe";
        newB = budget * 0.9;
    }
    console.log(`Somewhere in ${where}`);
    console.log(`${type} - ${newB.toFixed(2)}`);
}