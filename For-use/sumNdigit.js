function sumDig(n) {
    let num = String(n);
    let res = 0;
    for (let i = 0 ; i <= num.length; i++) { 
        res += Number(num.charAt(i));
    }
    console.log(`The sum of the digits is:${res}`);
}
sumDig("52")

