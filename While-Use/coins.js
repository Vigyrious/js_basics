function coin(arg1) {
    let money = Number(arg1);
    let coins = 0;
    while (money > 0) {
        if (money >= 2) {
            money -=2;
            coins ++;
        }
        else if(money >= 1){
            money -=1;
            money = Number(money.toFixed(2));
            coins++;
        }
        else if(money >= 0.5){
            money -= 0.5;
            money = Number(money.toFixed(2));
            coins ++;
        }
        else if(money >= 0.2){
            money -= 0.2;
            money = Number(money.toFixed(2));
            coins ++;
        }
        else if(money >= 0.1){
            money -= 0.1;
            money = Number(money.toFixed(2));
            coins ++;
        }
        else if(money >=0.05){
            money -= 0.05;
            money = Number(money.toFixed(2));
            coins ++;
        }
        else if(money >=0.02){
            money -=0.02;
            money = Number(money.toFixed(2));
            coins++;
        }
        else if(money >=0.01){
            money -=0.01;
            money = Number(money.toFixed(2));
            coins++
        }
    }
    console.log(coins);
}
coin(["1.23"]);
