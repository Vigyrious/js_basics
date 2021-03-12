function a(a1) {
    let typeCruis = a1[0];
    let cabinType = a1[1];
    let nights = Number(a1[2]);
    let res = 0;
    switch(typeCruis) {
        case "Mediterranean":
            switch(cabinType) {
                case "standard cabin": res = 27.5; break;
                case "cabin with balcony": res = 30.2;break;
                case "apartment": res = 40.5;break;
            }
            break;
        case "Adriatic":
            switch(cabinType) {
                case "standard cabin": res = 22.99; break;
                case "cabin with balcony": res = 25;break;
                case "apartment": res = 34.99;break;
            }
            break; 
        case "Aegean":
            switch(cabinType) {
                case "standard cabin": res = 23; break;
                case "cabin with balcony": res = 26.6;break;
                case "apartment": res = 39.8;break;
            }
            break;        
    }
    res = res * 4 * nights;
    if (nights > 7){
        res *= 0.75;
    }
    console.log(`Annie's holiday in the ${typeCruis} sea costs ${res.toFixed(2)} lv.`);
}
a([ 'Aegean', 'standard cabin', '10', '' ]
)