function volleyball(arg1,arg2,arg3){
    let yearType = String(arg1);
    let holidays = Number(arg2);
    let holidayHome = Number(arg3);
    let weekends = 48;
    let weekendsSofia = weekends - holidayHome;
    let playTimeHoliday = holidays * (2/3);
    let playTimeSofia = weekendsSofia * (3/4);
    let totalPlayTime = holidayHome + playTimeHoliday + playTimeSofia;
    if (yearType === "leap") {
        totalPlayTime = totalPlayTime * 1.15;
        console.log(Math.floor(totalPlayTime));
    }
    else {
        console.log(Math.floor(totalPlayTime));
    }

}