function movingO(arg1) {
    let width = Number(arg1[0]);
    let length = Number(arg1[1]);
    let heigth = Number(arg1[2]);
    let cubic = width * length * heigth;
    let i = 4;
    let sum = Number(arg1[3]);
    while (arg1[i] !== "Done" && sum < cubic ) {
        sum += Number(arg1[i]);
        i++;
    }
    if (cubic >= sum) {
        console.log(`${cubic - sum} Cubic meters left.`)
    }
    else {
        console.log(`No more free space! You need ${sum - cubic} Cubic meters more.`)
    }
}
movingO(["10",
"1",
"2",
"4",
"6",
"Done"])

;