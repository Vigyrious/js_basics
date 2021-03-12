function bakery(a){
    let contestans = Number(a.shift());
    let contName = a.shift();
    let score = Number(a.shift());
    let stopCount = 0;
    let sum = 0;
    let winner = "";
    let maxPoints = 0;
    while (contestans > stopCount) {
        while (contName != "Stop") {
            sum += score;
            if(a[0] == "Stop"){
                if(sum > maxPoints){
                    winner = contName;
                    maxPoints = sum;
                    console.log(`${contName} has ${sum} points.`);
                    console.log(`${contName} is the new number 1!`);
                    contName = a.shift();
                     break;
                }
                console.log(`${contName} has ${sum} points.`)
                contName = a.shift();
                break;
            }
            score = Number(a.shift());
        }
        contName = a.shift();
        score = Number(a.shift());
        stopCount ++;
        sum = 0;
    }
    console.log(`${winner} won competition with ${maxPoints} points!`);
}
bakery([
    '3',      'Chef Manchev',
    '10',     '10',
    '10',     '10',
    'Stop',   'Natalie',
    '8',      '2',
    '9',      'Stop',
    'George', '9',
    '2',      '4',
    '2',      'Stop'
  ])
;  