function record(arg1,arg2,arg3) {
    let sec_record = Number(arg1);
    let met_dist = Number(arg2);
    let sec_1m = Number(arg3);
    let resist = Math.floor(met_dist/15) * 12.5;
    let pace = (met_dist * sec_1m) + resist;
    let lose = pace - sec_record ;


    if (pace < sec_record) {
        console.log(`Yes, he succeeded! The new world record is ${pace.toFixed(2)} seconds.`);
    }
    else {
        console.log(`No, he failed! He was ${lose.toFixed(2)} seconds slower.`)
    }

}
record("55555.67",
"3017",
"5.03")
;