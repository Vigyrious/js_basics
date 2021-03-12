function lowestNum(arg1) {
    let quantity = Number(arg1[0]);
    let current = Number(arg1[1]);
    for (let i = 2; i <= quantity; i++) {
        if (Number(arg1[i]) < current) {
        current = arg1[i];
        }
    }
    console.log(current);
}
lowestNum(["1",
"100"])
;