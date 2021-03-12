function bake(a1){
    let contestants = Number(a1.shift());
    let charityMoney = 0;
    let allCount = 0;
    let cont = 0;
    while(cont < contestants) {
        let name = a1.shift();
        let type = a1.shift();

        let cookieCount = 0;
        let cakesCount = 0;
        let waffleCount = 0;
    
    while (type !== "Stop baking!"){
        let countBaked = Number(a1.shift());
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
        type = a1.shift();
        if (type == "Stop baking!") {
            console.log(`${name} baked ${cookieCount} cookies, ${cakesCount} cakes and ${waffleCount} waffles.`);
            charityMoney += cookieCount*1.50 + waffleCount*2.30 + cakesCount*7.80;
        }
    }
    cont ++;
}
    console.log(`All bakery sold: ${allCount}`);
    console.log(`Total sum for charity: ${charityMoney.toFixed(2)} lv.`);    
}
















bake(['3', 'Iva','cookies',  '5','cakes',   '3','Stop baking!','George','cakes',   '7','waffles',  '2','Stop baking!', 'Ivan','cookies',  '6','Stop baking!'])
//bake(['1', 'Iva','cookies',  '5','cakes',   '3','Stop baking']);