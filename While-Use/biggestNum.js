function bigNum(arg1) {
    let i = 0;
    let current = Number(arg1[i]);
    while (arg1[i] !== "Stop") {
        if(current < Number(arg1[i])) {
            current = Number(arg1[i]);
        }
        i++;
    }
    console.log(current);
}
bigNum(["-10",
"20",
"-30",
"Stop"])
;