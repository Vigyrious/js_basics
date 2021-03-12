function lily(n1,n2,n3) {
    let age = Number(n1);
    let washing = Number(n2);
    let toy = Number(n3);
    let toysum = 0;
    let money = 0;
    let result = 0;
    let bdaymoney = 10;
    let taken = 0;

    for (let i = 1; i <=age; i++){
        if (i % 2 == 0) {
            
            money += bdaymoney;
            bdaymoney +=10;
            money -= 1;
        }
        else {
            toysum +=1;
        }
    }
    result = toysum*toy + money;

    if (result >= washing) {
        console.log(`Yes! ${(result-washing).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(washing-result).toFixed(2)}`);
    }
}
lily("21", "1570.98", "3");