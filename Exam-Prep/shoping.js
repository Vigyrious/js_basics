function a(a1,a2,a3,a4){
    let budget = Number(a1);
    let videoCount = Number(a2) * 250;
    let cpuCount = Number(a3) * (videoCount * 0.35);
    let ramCount = Number(a4) * (videoCount * 0.1);
    let bill = videoCount + cpuCount + ramCount;
    if (Number(a2) > Number(a3)) {
        bill *= 0.85;
    }
    if(budget>=bill){
        console.log(`You have ${(budget-bill).toFixed(2)} leva left!`);
    }
    else {
        console.log(`Not enough money! You need ${(bill - budget).toFixed(2)} leva more!`);
    }
}
a(920.45,3,1,1)