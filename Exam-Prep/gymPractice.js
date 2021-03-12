function a(a1,a2){
    let country = a1;
    let type = a2;
    let diff = 0;
    let play = 0;
    switch(country) {
        case "Russia":
            if(type === "ribbon") {
                diff = 9.1;
                play = 9.4;
            }
            else if(type === "hoop"){
                diff=9.3;
                play=9.8;
            }
            else{
                diff=9.6;
                play=9;
            }
            break;
        case "Bulgaria":
            if(type === "ribbon"){
                diff = 9.6;
                play = 9.4;
            }
            else if(type === "hoop"){
                diff = 9.55;
                play = 9.75;
            }
            else{
                diff = 9.5;
                play = 9.4;
            }
            break;
        case "Italy":
            if(type === "ribbon") {
                diff = 9.2;
                play = 9.5;
            }
            else if(type === "hoop"){
                diff = 9.45;
                play = 9.35;
            }
            else {
                diff = 9.7;
                play = 9.15;
            }
            break;
    }
    let totalScore = diff + play;
    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${type}.`);
    console.log(`${((20 - totalScore)/20*100).toFixed(2)}%`);
}
a("Russia","rope")