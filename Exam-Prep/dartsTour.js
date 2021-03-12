function a(a1) {
    k = 0;
    let points = Number(a1[k]);
    k++;
    let type = a1[k];
    k++;
    let target = Number(a1[k]);
    k++;
    let moves = 0;
    while (points > 0  && type !== "bullseye") {
        moves ++;
        let sum = 0;
        if(type === "number section") {
            sum = target;
        }
        else if(type === "double ring") {
            sum = target * 2;
        }
        else {
            sum = target * 3;
        }
        points -= sum;
        
        type = a1[k];
        k++;
        target = Number(a1[k]);
        k++;
    }
    if (type == "bullseye") {
        console.log(`Congratulations! You won the game with a bullseye in ${moves+1} moves!`);
    }
    else {
        if(points < 0) {
            console.log(`Sorry, you lost. Score difference: ${Math.abs(points)}.`);
        }
        else {
            console.log(`Congratulations! You won the game in ${moves} moves!`);
        }
    }
}
a([ '101', 'triple ring', '7', 'double ring', '19', 'bullseye', '' ]
)