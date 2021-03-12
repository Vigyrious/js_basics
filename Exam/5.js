function a(a1) {
    k = 0;
    let locations = Number(a1[k]);
    k++;
    let goldAvg = Number(a1[k]);
    k++;
    let daysDig = Number(a1[k]);
    k++;
    let total = 0;
    let allTotal = 0;
    for (i=0;i<locations;i++) {
        for(j = 0;j < daysDig;j++) {
            let goldDay = Number(a1[k]);
            k++;
            total += goldDay;
        }
        if ((total / daysDig) >= goldAvg) {
            console.log(`Good job! Average gold per day: ${(total/daysDig).toFixed(2)}.`);
        }
        else {
            console.log(`You need ${(goldAvg - (total/daysDig)).toFixed(2)} gold.`);
        }
        goldAvg = Number(a1[k]);
        k++;
        daysDig = Number(a1[k]);
        k++;
        total = 0;

    }
}
a([
    '2',  '10', '3',
    '10', '10', '11',
    '20', '2',  '20',
    '10'
  ])