function poorGrade(arg1) {
    let allowed = Number(arg1[0]);
    let i = 2;
    let poorScore = 0;
    let res = 0;
    while (i <= arg1.length && poorScore <= allowed && arg1[i-1] !== "Enough") {
        res += Number(arg1[i]);
        if (Number(arg1[i])<= 4) {
            poorScore++;
        }
        i +=2;       
    }
    if (poorScore == allowed) {
        console.log(`You need a break, ${poorScore} poor grades.`)
    }
    else {
        console.log(`Average score: ${(res/((i/2)-1)).toFixed(2)}`)
        console.log(`Number of problems: ${(i-2)/2}`);
        console.log(`Last problem: ${arg1[i-3]}`);
    }
}
poorGrade(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


;