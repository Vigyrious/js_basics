function KidToyStore(arg1,arg2,arg3,arg4,arg5,arg6) {
    let exPrice = Number(arg1);
    let puzzleCount = Number(arg2);
    let talkDolls = Number(arg3);
    let fluffBear = Number(arg4);
    let minCount = Number(arg5);
    let truckCount = Number(arg6);
    let puzzle = 2.6;
    let talk = 3;
    let bear = 4.1;
    let minion = 8.2;
    let truck = 2;
    let toyCount = puzzleCount+talkDolls+fluffBear+minCount+truckCount;
    let result = (puzzleCount*puzzle + talkDolls*talk + bear*fluffBear + minion*minCount + truck*truckCount)*0.9;
    if (toyCount >= 50){
        result *= 0.75;
    }
    if (result >= exPrice){
        console.log(`Yes! ${(result-exPrice).toFixed(2)} lv left.`);
    }
    else { 
        console.log(`Not enough money! ${(exPrice - result).toFixed(2)} lv needed.`)
    }
}
kidstore("10000000", "10", "10", "10", "10", "9")