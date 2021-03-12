function hotelRoom(arg1,arg2) {
    let month = String(arg1);
    let night = Number(arg2);
    let Apresult = 0;
    let Stresult = 0;
    if (month === "May" || month === "October") {
        Stresult = night * 50;
        Apresult = night * 65;
    }
    else if (month === "June" || month === "September") {
        Stresult = night * 75.2;
        Apresult = night * 68.7;
    }
    else if (month === "July" || month === "August") {
        Stresult = night * 76;
        Apresult = night * 77;
    }
    if (month === "May" || month ==="October") {
        if (night > 14) {
            Stresult = Stresult * 0.7;
        }
        else if(night > 7 && night <= 14){
            Stresult = Stresult * 0.95;
        }
    }
    if (night > 14) {
        Apresult = Apresult * 0.9;
        if (month === "June" || month ==="September") {
            Stresult = Stresult * 0.8;
        }
    }
    console.log(`Apartment: ${Apresult.toFixed(2)} lv.`);
    console.log(`Studio: ${Stresult.toFixed(2)} lv.`);

}