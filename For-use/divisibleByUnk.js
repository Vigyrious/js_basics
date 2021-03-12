function divise(arg1) {
    let num = Number(arg1[0]);
    let res = 0;
    let p1=0;
    let p2=0;
    let p3=0;
    for (let i = 1; i <= num ; i ++) {  
        res = arg1[i];
        if (res % 4 == 0) {
            p3 += 1;
        }
        if (res % 2 == 0) {
            p1 += 1;
        }
        if (res % 3 == 0) {
            p2 += 1;
        }
    }
    p1 = (p1 / num * 100).toFixed(2);
    p2 = (p2 / num * 100).toFixed(2);
    p3 = (p3 / num * 100).toFixed(2);
    console.log(`${p1}%\n${p2}%\n${p3}%`);
}