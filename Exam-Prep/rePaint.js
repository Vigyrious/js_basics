function a(a1,a2,a3,a4){
    let Nylon = (Number(a1) + 2) * 1.5;
    let Paint = (Number(a2) * 1.1) * 14.5;
    let neededSeparator = Number(a3) * 5;
    let neededHours = Number(a4);
    let paintPrice = Nylon + Paint + neededSeparator + 0.4;
    let pay = (paintPrice * 0.3) * neededHours;
    console.log(`Total expenses: ${(paintPrice+pay).toFixed(2)} lv.`);
}
a(90,99,28,9)