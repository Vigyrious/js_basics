function schoolG(arg1) {
    let name = arg1[0];
    let i = 1;
    let grade = 0 ;
    let count = 0;
    while (count < 2 && i <= 12 && Number(arg1[i]) >= 4) {
        grade += Number(arg1[i]);
        i++;
        if (Number(arg1[i]) < 4 ) {
            count ++;
        }
    }
    if (i < 12) {
        console.log(`${name} has been excluded at ${i} grade`)
    }
    else {
        console.log(`${name} graduated. Average grade: ${(grade/(i-1)).toFixed(2)}`);
    }
}
schoolG(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

;