function bonus_points(arg1) {
    let num_1 = Number(arg1);
    let bonus = 0.0;
    if (num_1 <= 100) {
        bonus = 5;
    }
    else if (num_1 < 1000) {
        bonus = num_1 * 0.2;
    }
    else {
        bonus = num_1 *0.1 ;
    }
    if (num_1 %2 === 0){
        bonus += 1;
    }
    else if (num_1 %10 === 5){
        bonus += 2;
    }
    console.log(bonus)
    console.log(num_1 + bonus)
}
bonus_points("175");