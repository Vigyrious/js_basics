function histogram(arg1) {
    let num = Number(arg1[0]);
    let res = 0;
    let p1 = 0; 
    let p2 = 0; 
    let p3 = 0; 
    let p4 = 0; 
    let p5 = 0; 
    for (let i = 1; i <= num ; i ++) {
        res = arg1[i];
        if (res < 200) {
            p1 += 1;
        }
        else if (res <= 399) {
            p2 += 1;
        }
        else if (res <= 599) {
            p3 +=1 ;
        }
        else if (res <= 799) {
            p4 +=1;
        }
        else {
            p5 +=1;
        }
    }
    p1 = (p1 / num * 100).toFixed(2);
    p2 = (p2 / num * 100).toFixed(2);
    p3 = (p3 / num * 100).toFixed(2);
    p4 = (p4 / num * 100).toFixed(2);
    p5 = (p5 / num * 100).toFixed(2);
    console.log(`${p1}% \n${p2}% \n${p3}% \n${p4}% \n${p5}%`);
}
histogram(["3",
"1",
"2",
"999"]);
