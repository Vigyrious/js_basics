function sumStop(arg1) {
    let sum = 0;
    let i = 1;
    while (sum < Number(arg1[0])) {
        sum += Number(arg1[i]);
        i++;
    }
    console.log(sum);
}
sumStop(["100",
"10",
"20",
"30",
"40"])
;