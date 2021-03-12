function holidayTrip(arg1) {
    let neededMoney = Number(arg1[0]);
    let avaliableMoney = Number(arg1[1]);
    let spendCount = 0;
    i = 2;
    let command = "";
    let amount = 0;
    let day=1;
    let currentMoney = 0;
    while (avaliableMoney < neededMoney) {
        command = arg1[i];
        i++;
        currentMoney = Number(arg1[i]);
        switch (command) {
            case 'spend': avaliableMoney -= currentMoney;spendCount ++;break;
            case 'save' : avaliableMoney += currentMoney;spendCount=0;break;
        }
        if (avaliableMoney < 0) {
            avaliableMoney = 0;
        }
        i++;
        if (spendCount >= 5) {
            console.log("You can't save the money.")
            console.log(day)
            break;
        }
        if (arg1[i-2] !== "spend" && i>= 4) {
            spendCount = 0;
        }
        if (avaliableMoney >= neededMoney) {
            console.log(`You saved the money for ${day} days.`);break;
        }
        day++; 
    }
}
holidayTrip(["110",
"60",
"save",
"50"])



;