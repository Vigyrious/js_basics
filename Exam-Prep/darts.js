function a(a2){
    let a1 = arguments;
    let k = 0;
    let name = a1[k];
    k++;
    let target = a1[k];
    k++;
    let points = Number(a1[k]);
    k++;
    let sum = 301;
    let succesful = 0;
    let unsuccesful = 0;

    while (sum > 0 && target !== "Retire") {
        let current = 0;
        if(target === "Triple") {
            current = points * 3;
        }
        else if(target === "Double"){
            current = points * 2;
        }
        else {
            current = points;
        }
        if (sum >= current){
            sum -= current;
            succesful++;
        }
        else {
            unsuccesful ++;
        }
        target = a1[k];
        k++;
        points = Number(a1[k]);
        k++;
    }
    if (sum == 0) {
        console.log(`${name} won the leg with ${succesful} shots.`);
    }
    else {
        console.log(`${name} retired after ${unsuccesful} unsuccessful shots.`);
    }
}