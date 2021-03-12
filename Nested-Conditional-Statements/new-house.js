function newH(arg1,arg2,arg3) {
    let flowerType = String(arg1);
    let flowerCount = Number(arg2);
    let budgetSize = Number(arg3);
    let calc = 0;
    if (flowerType === "Roses") {
        if (flowerCount > 80){
        calc = flowerCount * 5 * 0.9;
        }
    else {
        calc = flowerCount * 5;
    }
}
    else if (flowerType === "Dahlias") {
        if (flowerCount > 90){
        calc = flowerCount * 3.8 * 0.85;
        }
    else {
        calc = flowerCount * 3.8;
    }
}
    else if (flowerType === "Tulips") {
        if (flowerCount > 80){
        calc = flowerCount * 2.8 * 0.85;
        }
    else {
        calc = flowerCount * 2.8;
    }
}
    else if (flowerType === "Narcissus") {
        if (flowerCount < 120){
        calc = flowerCount * 3 * 1.15;
        }
    else {
        calc = flowerCount * 3;
    }
}
    else if (flowerType === "Gladiolus") {
        if (flowerCount < 80){
        calc = flowerCount * 2.5 * 1.2;
        }
    else {
        calc = flowerCount * 2.5;
    }
}
    if (budgetSize >= calc) {
        let win = budgetSize - calc; 
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${win.toFixed(2)} leva left.`)
    }
    else {
        let win = calc - budgetSize;
        console.log(`Not enough money, you need ${win.toFixed(2)} leva more.`)
    }
}