function bake(a1){
    k = 0;
    let contestants = Number(a1[k]);
    k++;
    let charityMoney = 0;
    let allCount = 0;
    let contCount = 0;
    while (contCount < contestants) {
        let cookieCount = 0;
        let waffleCount = 0;
        let cakesCount = 0;
        let name = a1[k];
        k++;
        let type = a1[k];
        k++;
        
    while (type !== "Stop baking!"){
        let countBaked = Number(a1[k]);
        k++;
        allCount += countBaked;
        if (type === "cakes") {
            cakesCount += countBaked;     
        }
        else if(type === "cookies"){
            cookieCount += countBaked;
        }
        else if(type === "waffles"){
            waffleCount += countBaked;    
        }
        type = a1[k];
        k++;
    }
    console.log(`${name} baked ${cookieCount} cookies, ${cakesCount} cakes and ${waffleCount} waffles.`);
    charityMoney += cookieCount*1.5 + waffleCount*2.3 + cakesCount*7.8;
    contCount ++;
}
    console.log(`All bakery sold: ${allCount}`);
    console.log(`Total sum for charity: ${(charityMoney).toFixed(2)} lv.`);    
}
















bake(['3', 'Iva','cookies',  '5','cakes',   '3','Stop baking!','George','cakes',   '7','waffles',  '2','Stop baking!', 'Ivan','cookies',  '6','Stop baking!'])
//bake(['1', 'Iva','cookies',  '5','cakes',   '3','Stop baking']);