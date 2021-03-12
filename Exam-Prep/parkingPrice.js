function a(a1){
    let dayCount = Number(a1.shift());
    let hourCount = Number(a1.shift());
    let parkCost = 0;
    let parkTotal = 0;
    for(i=1;i<=dayCount;i++){
        for(j=1;j<=hourCount;j++){
            if((i % 2 == 0) && (j % 2 != 0)) {
                parkCost += 2.5;
            }
            else if((i % 2 != 0) && (j % 2 == 0)){
                parkCost += 1.25;
            }
            else {
                parkCost += 1;
            }
        }
        console.log(`Day: ${i} - ${parkCost.toFixed(2)} leva`);
        parkTotal += parkCost;
        parkCost = 0;
    }
    console.log(`Total: ${parkTotal.toFixed(2)} leva`);
}