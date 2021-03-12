function a(a1){
    let k = 0;
    let eggCount = Number(a1[k]);
    k++;
    let orange = 0;
    let green = 0;
    let blue = 0;
    let red = 0;
    let egg = a1[k];
    k++;
    for(i=0;i<eggCount;i++){
        if(egg == "orange") {
            orange ++;
        }
        else if(egg == "blue"){
            blue ++;
        }
        else if(egg == "green"){
            green ++;
        }
        else {
            red ++;
        }
        egg = a1[k];
        k++;
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    if(orange > green && orange > blue && orange > red){
        console.log(`Max eggs: ${orange} -> orange`);
    }
    else if(green > orange && green > blue && green > red) {
        console.log(`Max eggs: ${green} -> green`);
    }
    else if(blue > orange && blue > green && blue > red){
        console.log(`Max eggs: ${blue} -> blue`);
    }
    else if(red > orange && red > blue && red > green){
        console.log(`Max eggs: ${red} -> red`);
    }
}