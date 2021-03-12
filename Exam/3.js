function a(a1) {
    let k = 0;
    let catCount = Number(a1[k]);
    k++;
    let grams = Number(a1[k]);
    k++;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let total = 0;
    for (i=0;i<catCount;i++) {
        if(grams > 99) {
            if(grams < 200) {
                group1++;
            }
            else if(grams < 300) {
                group2 ++;
            }
            else if (grams < 400){
                group3 ++;
            }
        }
        total += grams;
        grams = Number(a1[k]);
        k++;
    }
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${((total/1000)*12.45).toFixed(2)} lv.`);
}
a([
    '6',   '102',
    '236', '123',
    '399', '342',
    '222', ''
  ])