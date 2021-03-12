function factorial(num1){
    let num = Number(num1);
    let res = 1;

    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    console.log(res);
}
factorial("5");