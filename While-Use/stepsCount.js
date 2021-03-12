function stepCount(arg1) {
    let sum = 0;
    let i = 0;
    let brake = false;
    while (arg1[i] != "Going home") {
        sum += Number(arg1[i]);
        i++;
        if (sum >= 10000) {
            let diff = sum - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);brake = true;break;
        }
    }
    sum += Number(arg1[i+1]);
    if(!brake) {
    if (sum >= 10000) {
        let diff = sum - 10000;
        console.log(`Goal reached! Good job!`); 
        console.log(`${diff} steps over the goal!`);
    }
    else {
        let diff = 10000 - sum;
        console.log(`${diff} more steps to reach goal.`);
    }
}

}
(["1",
"1",
"2",
"6"])
