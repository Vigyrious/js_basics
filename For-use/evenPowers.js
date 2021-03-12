/* function evenPowers(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(Math.pow(2,i));
        }
    }
}
evenPowers(6) */

function powerof2(n) {
    let num = 1;
    for (let i = n/2; i <=n; i++) {
        console.log(num);
        num = num * 2 * 2;
    }
}
powerof2(10)