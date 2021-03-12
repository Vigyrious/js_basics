function a(a1) {
    k = 0;
    let name = a1[k];
    k ++;
    let gamesPlayed = Number(a1[k]);
    k ++;
    let gameName = a1[k];
    k++;
    let pointsCount = Number(a1[k]);
    k++;
    let volleySum = 0;
    let tennisSum = 0;
    let badmintonSum = 0;
    let volleyCount = 0;
    let tennisCount = 0;
    let badmintonCount = 0;
    for(i=0;i<gamesPlayed;i++){
        switch(gameName){
            case "badminton" : pointsCount += pointsCount*0.02;badmintonSum+=pointsCount;badmintonCount++;break;
            case "tennis" : pointsCount += pointsCount*0.05;tennisSum+=pointsCount;tennisCount++;break;
            case "volleyball" : pointsCount += pointsCount*0.07;volleySum+=pointsCount;volleyCount++;break;
        }
        gameName = a1[k];
        k++;
        pointsCount = Number(a1[k]);
        k++;
    }
    let badmintonRes = Math.floor(badmintonSum/badmintonCount);
    let tennisRes = Math.floor(tennisSum/tennisCount);
    let volleyballRes = Math.floor(volleySum/volleyCount);
    if(badmintonRes >= 75 && tennisRes >= 75 && volleyballRes >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(badmintonSum + tennisSum + volleySum)} points.`);
    }
    else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(badmintonSum + tennisSum + volleySum)}.`);
    }
}