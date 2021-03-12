function summerS(arg1,arg2) {
    let degrees = Number(arg1);
    let dayTime = String(arg2);
    let outfit = String;
    let shoes = String;
    if (dayTime === "Morning") {
        if(degrees >= 10 && degrees <= 18 ) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if(degrees > 18 && degrees <= 24 ) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if(degrees >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }
    else if (dayTime === "Afternoon") {
        if(degrees >= 10 && degrees <= 18 ) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if(degrees > 18 && degrees <= 24 ) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if(degrees >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    else if (dayTime === "Evening") {
        if(degrees >= 10 && degrees <= 18 ) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if(degrees > 18 && degrees <= 24 ) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if(degrees >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}