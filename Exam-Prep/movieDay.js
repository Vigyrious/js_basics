function a(a1,a2,a3){
    let picTime = Number(a1);
    let scenetotal = Number(a2) * Number(a3);
    let terrain = picTime * 0.15;
    let total = scenetotal + terrain;
        if(total > picTime){
            let left = total - picTime;
            console.log(`Time is up! To complete the movie you need ${Math.round(left)} minutes.`)
        }
        else {
            let left = picTime - total;
            console.log(`You managed to finish the movie on time! You have ${Math.round(left)} minutes left!`)
        }
}