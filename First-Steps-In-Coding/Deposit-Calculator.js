function depositCalc(arg1, arg2, arg3) {
    let deposit_amount = Number(arg1);
    let deposit_lenght = Number(arg2);
    let yearly_profit = Number(arg3);
    let interest = deposit_amount * (yearly_profit / 100);
    let montly_interest = interest / 12;
    let result = deposit_amount + (deposit_lenght * montly_interest);
    console.log(result)
}
depositCalc("2350", "6", "7");