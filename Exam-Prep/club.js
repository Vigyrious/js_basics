function a(a1){
    let wantedProfit = Number(a1.shift());
    let drinkName = a1.shift();
    let drinkPrice = Number(a1.shift());
    let totalSum = 0;
    while (drinkName !== "Party!" && totalSum < wantedProfit) {
        let sum = drinkPrice * (drinkName.length);
        if (sum % 2 != 0){
            sum *= 0.75;
        }
        totalSum += sum;
        drinkName = a1.shift();
        drinkPrice = Number(a1.shift());
    }
    if (totalSum < wantedProfit){
        console.log(`We need ${(wantedProfit-totalSum).toFixed(2)} leva more.`);
        console.log(`Club income - ${totalSum.toFixed(2)} leva.`)
    }
    else {
        console.log(`Target acquired.`);
        console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
    }
}
a([ '100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10' ]);
