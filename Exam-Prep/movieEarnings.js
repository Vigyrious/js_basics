function solve(arg1,arg2,arg3,arg4,arg5){
    let MovieName = arg1;
    let daysCount = Number(arg2);
    let ticketCount = Number(arg3);
    let ticketPrice = Number(arg4);
    let percentage = Number(arg5) / 100;
    let res = (ticketCount * ticketPrice *daysCount) - ((ticketCount * ticketPrice *daysCount)*percentage);
    console.log(`The profit from the movie ${MovieName} is ${res.toFixed(2)} lv.`);
}
solve("The Programmer",20,500,7.5,7)