function examTime(arg1, arg2, arg3 ,arg4) {
    let examTime = Number(arg1);
    let examMin = Number(arg2);
    let arriveTime = Number(arg3);
    let arriveMin = Number(arg4);
    let combineExam = examTime * 60 + examMin;
    let combineArrive = arriveTime * 60 + arriveMin;
    if (combineExam < combineArrive) {
        console.log("Late");
        if (combineArrive - combineExam < 60 ) {
            let min = combineArrive - combineExam;
            console.log(`${min} minutes after the start`)
            }
            else {
                let hours = Math.floor((combineArrive - combineExam) / 60);
                let min = (combineArrive - combineExam) % 60;
                if (min < 10) {
                    console.log(`${hours}:0${min} hours after the start`);
                }
                else {
                    console.log(`${hours}:${min} hours after the start`);
                }
            }
        }
    else if(combineExam - combineArrive <= 30) {
        let min = (combineExam - combineArrive) % 60;
        console.log(`on time ${min} minutes before the start`);
    }
    else if (combineExam - combineArrive > 30){
        console.log("Early");
        if (combineExam - combineArrive < 60) {
            let min = combineExam - combineArrive;
            console.log(`${min} minutes before the start`);
        }
        else {
            let hours = Math.floor((combineExam - combineArrive) / 60);
            let min = (combineExam - combineArrive) % 60;
            if(min < 10) {
                console.log(`${hours}:0${min} hours before the start`);
            }
            else {
                console.log(`${hours}:${min} hours before the start`);
            }
        }
    }


}