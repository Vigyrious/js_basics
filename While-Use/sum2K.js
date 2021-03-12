function sum2k(arg1) {
    let num = Number(arg1);
    let i = 1;
    let res = 1;
    while (res <= num) {
        console.log(res);
        res = res * 2 + 1;
    }
}
sum2k("15");