function skiiVac(arg1,arg2,arg3) {
    let stayPeriod = Number(arg1);
    let roomType = String(arg2);
    let review = String(arg3);
    let discount = 0;
    let priceBeforeReview = 0;
    if (roomType === "apartment") {
        if (stayPeriod < 10) {
            discount = (25*(stayPeriod - 1)) * 0.3;
            priceBeforeReview = (25*(stayPeriod - 1)) - discount;
        }
        else if (stayPeriod >= 10 && stayPeriod <= 15){
            discount = (25*(stayPeriod - 1)) * 0.35;
            priceBeforeReview = (25*(stayPeriod - 1)) - discount;
        }
        else if (stayPeriod > 15){
            discount = (25*(stayPeriod - 1)) * 0.5;
            priceBeforeReview = (25*(stayPeriod - 1)) - discount;
        }
    }
   else if (roomType === "president apartment") {
        if (stayPeriod < 10) {
            discount = (35*(stayPeriod - 1)) * 0.1;
            priceBeforeReview = (35*(stayPeriod - 1)) - discount;
        }
        else if (stayPeriod >= 10 && stayPeriod <= 15){
            discount = (35*(stayPeriod - 1)) * 0.15;
            priceBeforeReview = (35*(stayPeriod - 1)) - discount;

        }
        else if (stayPeriod > 15){
            discount = (35*(stayPeriod - 1)) * 0.2;
            priceBeforeReview = (35*(stayPeriod - 1)) - discount;

        }
    }
    else if (roomType === "room for one person") {
        priceBeforeReview = (stayPeriod - 1) * 18
    }
    if (review === "positive") {
        priceBeforeReview = priceBeforeReview + (priceBeforeReview * 0.25);
    }
    else {
        priceBeforeReview = priceBeforeReview - (priceBeforeReview * 0.1);
    }
    console.log(priceBeforeReview.toFixed(2));
}