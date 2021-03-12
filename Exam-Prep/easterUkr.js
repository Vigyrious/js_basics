function a(a1){
    k = 0;
    let clients = Number(a1[k]);
    k ++;
    
    let overallSum = 0;
    
    for(i=0;i<clients;i++) {
        let type = a1[k];
    k++;
        let basket = 0;
        let sum = 0 ;
        while (type !== "Finish") {
            if (type === "basket") {
                sum += 1.5;
            }
            else if (type === "wreath"){
                sum += 3.8;
            }
            else {
                sum += 7;
            }
            basket ++;
            
            type = a1[k];
            k++;
        }
        if (basket % 2 == 0){
            sum = sum * 0.8;
        }
        overallSum += sum;
        console.log(`You purchased ${basket} items for ${sum.toFixed(2)} leva.`);
    }
    console.log(`Average bill per client is: ${(overallSum/clients).toFixed(2)} leva.`);
}
a([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
  ])