function a(arg1,arg2,arg3) {
    let name = arg1;
    let episodeLength = Number(arg2);
    let brakeLength = Number(arg3);
    let launchbrake = brakeLength / 8;
    let relax = brakeLength / 4;
    let freeTime = brakeLength - relax - launchbrake;
    if (freeTime >= episodeLength) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freeTime - episodeLength)} minutes free time.`)
    }
    else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeLength - freeTime)} more minutes.`)
    }
}
a("Teen Wolf",48,60);