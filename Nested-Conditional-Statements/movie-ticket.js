function movieTicket(arg1,arg2) {
    let day = String(arg1);
    switch (day) {
        case "Monday":
        case "Friday" :
        case "Tuesday": console.log(12);break;
        case "Wednesday":
        case "Thursday" :console.log(14);break;
        case "Saturday":
        case "Sunday":console.log(16);break;
        
    }
}