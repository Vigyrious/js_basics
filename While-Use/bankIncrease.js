function bankInc(arg1) {
    let bank = 0;
    let i = 0;
    while (arg1[i] != "NoMoreMoney") {
        if (Number(arg1[i]) >= 0) {
            bank += Number(arg1[i]);
            console.log(`Increase: ${Number(arg1[i]).toFixed(2)}`);
            i++;
        }
        else {
            console.log("Invalid operation!");break;
        }
    }
    console.log(`Total: ${bank.toFixed(2)}`);
}
bankInc(["120",
"45.55",
"-150"])

;