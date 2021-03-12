function finedBruv(arg1) {
    let websites = Number(arg1[0]);
    let salary = Number(arg1[1]);
    for (let i = 0; i <= websites; i++) {
        if (arg1[i+2] == "Facebook") {
            salary -= 150;
        }
        else if (arg1[i+2] == "Instagram") {
            salary -= 100;
        }
        else if (arg1[i+2] == "Reddit") {
            salary -= 50;
        }
        
    }

    if (salary > 0) {
        console.log(salary);
    }
    else {
        console.log(`You have lost your salary.`)
    }
}
finedBruv(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])


;
