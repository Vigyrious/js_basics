function store(arg1, arg2, num1) {
    let food = String(arg1);
    let city = String(arg2);
    let quantity = Number(num1);
    let coffee = 0.5;
    let water = 0.8;
    let beer = 1.2;
    let sweets = 1.45;
    let peanuts = 1.6;
    if (city === "Plovdiv") { 
        coffee = 0.4;
        water = 0.7;
        beer = 1.15;
        sweets = 1.3;
        peanuts = 1.5;
    }
    else if (city === "Varna") {
        coffee = 0.45;
        water = 0.7;
        beer = 1.1;
        sweets = 1.35;
        peanuts = 1.55;
    }
    if (food === "coffee") {
        console.log(coffee * quantity);
    }
    else if (food === "water") {
        console.log(water * quantity);
    }
    else if (food === "beer") {
        console.log(beer * quantity);
    }
    else if (food === "sweets") {
        console.log(sweets * quantity);
    }
    else if (food === "peanuts") {
        console.log(peanuts * quantity);
    }
}