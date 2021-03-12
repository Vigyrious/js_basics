function a (a1,a2,a3) {
    let team = a1;
    let souvenir = a2;
    let souvenirCount = Number(a3);
    let res = 0;
    let isBrake = false;
    switch(team) {
        case "Argentina": 
        switch(souvenir) {
            case "flags": res = 3.25;break;
            case "caps": res = 7.2;break;
            case "posters": res = 5.1;break;
            case "stickers": res = 1.25;break;
            default: console.log(`Invalid stock!`);isBrake = true;break;
        }
        break;
    case "Brazil": 
        switch(souvenir) {
            case "flags": res = 4.2;break;
            case "caps": res = 8.5;break;
            case "posters": res = 5.35;break;
            case "stickers": res = 1.2;break;
            default: console.log(`Invalid stock!`);isBrake = true;break;
        }
        break;
    case "Croatia": 
        switch(souvenir) {
            case "flags": res = 2.75;break;
            case "caps": res = 6.9;break;
            case "posters": res = 4.95;break;
            case "stickers": res = 1.1;break;
            default: console.log(`Invalid stock!`);isBrake = true;break;
        }
        break;
    case "Denmark": 
        switch(souvenir) {
            case "flags": res = 3.1;break;
            case "caps": res = 6.5;break;
            case "posters": res = 4.8;break;
            case "stickers": res = 0.9;break;
            default: console.log(`Invalid stock!`);break;
        }
        break;
    default: console.log(`Invalid country!`);isBrake = true; break;
    }
    if(!isBrake) {
        console.log(`Pepi bought ${souvenirCount} ${souvenir} of ${team} for ${(res * souvenirCount).toFixed(2)} lv.`);
    }
}
a("USA","shapka",18)