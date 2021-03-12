function a(a1,a2,a3){
    let destination = a1;
    let stay = a2;
    let nights = Number(a3);
    let res = 0;
    switch(destination){
        case "France":
            switch(stay) {
                case "21-23": res = 30;break;
                case "24-27": res = 35;break;
                case "28-31": res = 40;break;
            }
            break;
        case "Italy":
            switch(stay) {
                case "21-23": res = 28;break;
                case "24-27": res = 32;break;
                case "28-31": res = 39;break;
            }
            break;    
        case "Germany":
            switch(stay) {
                case "21-23": res = 32;break;
                case "24-27": res = 37;break;
                case "28-31": res = 43;break;
            }
            break;    
    }
    let total = res * nights;
    console.log(`Easter trip to ${destination} : ${total.toFixed(2)} leva.`);
}