function moviestar(arg1,arg2,arg3) {
    let budget = Number(arg1);
    let stats = Number(arg2);
    let price_per_stat = Number(arg3);
    let all_price = stats * price_per_stat;
    let decor = budget * 0.1;

    if (stats > 150) {
        all_price *= 0.9;
    }

    if (budget >= all_price + decor) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - (all_price+decor)).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${((all_price + decor) - budget).toFixed(2)} leva more.`);
    }
}