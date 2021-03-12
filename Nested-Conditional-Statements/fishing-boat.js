function fishingBoat(arg1,arg2,arg3) {
    let budgetSize = Number(arg1);
    let season = String(arg2);
    let fishersCount = Number(arg3);
    let boatPrice = 0;
    if (season === "Spring") {
        if (fishersCount <= 6) {
            boatPrice = 3000 * 0.9;
        }
        else if (fishersCount >= 7 && fishersCount <= 11) {
            boatPrice = 3000 * 0.85;
        }
        else {
            boatPrice = 3000 * 0.75; 
        }
    }
    if (season === "Winter") {
        if (fishersCount <= 6) {
            boatPrice = 2600 * 0.9;
        }
        else if (fishersCount >= 7 && fishersCount <= 11) {
            boatPrice = 2600 * 0.85;
        }
        else {
            boatPrice = 2600 * 0.75; 
        }
    }
    else if (season === "Autumn" || season === "Summer"){
        if (fishersCount <= 6) {
            boatPrice = 4200 * 0.9;
        }
        else if (fishersCount >= 7 && fishersCount <= 11) {
            boatPrice = 4200 * 0.85;
        }
        else {
            boatPrice = 4200 * 0.75; 
        }
    }
    if (fishersCount % 2 == 0 && season !== "Autumn"){
        boatPrice = boatPrice * 0.95;
    }
    if (budgetSize >= boatPrice) {
        let win = budgetSize - boatPrice;
        console.log(`Yes! You have ${win.toFixed(2)} leva left.`)
    }
    else {
        let lose = boatPrice - budgetSize;
        console.log(`Not enough money! You need ${lose.toFixed(2)} leva.`)
    }
}