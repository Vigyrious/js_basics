function a(){
    a1 = arguments;
    k = 0;
    let budget = Number(a1[k]);
    k++;
    let productName = a1[k];
    k++;
    let productPrice = Number(a1[k]);
    let spent = 0;
    let count = 1;
    while(productName !== "Stop") {
        
        if(count % 3 == 0){
            productPrice /= 2;
        }
        spent += productPrice;
        budget -= productPrice;
        if (budget < 0){
            break;
        }
        count ++;
        k++;
        productName = a1[k];
        k++;
        productPrice = Number(a1[k]);
        
    }
    if (budget >= 0){
        console.log(`You bought ${count-1} products for ${spent.toFixed(2)} leva.`);
    }
    else {
        budget = Math.abs(budget)
        console.log(`You don't have enough money!`);
        console.log(`You need ${budget.toFixed(2)} leva!`);
    }
}
a(["54","Thermal","24","Sunscreen","45"]);