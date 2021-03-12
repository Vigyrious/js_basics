function workOrWeekend(day) {
    let check = String(day);
    switch(check) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": console.log("Working day");break;
        case "Saturday":
        case "Sunday": console.log("Weekend");break;
        default: console.log("Error")
    }
}