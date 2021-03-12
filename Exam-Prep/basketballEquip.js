function a(a1){
    let yearlyTax = Number(a1);
    let shoes = yearlyTax * 0.6;
    let suit = shoes * 0.8;
    let ball = suit / 4;
    let acc = ball / 5;
    console.log(`${(yearlyTax + shoes + suit + ball + acc).toFixed(2)}`);

}
a(320)