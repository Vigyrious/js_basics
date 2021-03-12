function a(a1,a2,a3,a4){
    let cityName = a1;
    let packageType = a2;
    let vip = a3;
    let restDay = Number(a4);
    let res = 0;
    let isInvalid = false;
    if(restDay > 0){
        if(restDay > 7){
            restDay -= 1;
        }
    switch(cityName){
        case "Bansko":
        case "Borovets":
            switch(packageType){
                case "withEquipment":
                    res = 100;
                    if(vip === "yes") {
                        res *= 0.9;
                    }
                    break;
                case "noEquipment":
                    res = 80;
                    if(vip === "yes"){
                        res *= 0.95;
                    }
                    break;
            }
            break;
        case "Varna":
        case "Burgas":    
            switch(packageType){
                case "withBreakfast":
                    res = 130;
                    if(vip === "yes") {
                        res *= 0.88;
                    }
                    break;
                case "noBreakfast":
                    res = 100;
                    if(vip === "yes"){
                        res *= 0.93;
                    }
                    break;
                default:console.log(`Invalid input!`);isInvalid = true;
                break;
            }
            break;
            default:console.log(`Invalid input!`); isInvalid = true;
            break;
        }
        if(!isInvalid) {
            console.log(`The price is ${(res*restDay).toFixed(2)}lv! Have a nice time!`);
    }
}
    else {
        console.log(`Days must be positive number!`)
    }

}
a("Gabrovo","noBreakfast","no",1)