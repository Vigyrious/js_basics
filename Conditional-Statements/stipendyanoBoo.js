function new_stip(arg1,arg2,arg3){
    let dohod = Number(arg1);
    let sreden_uspeh = Number(arg2);
    let min_zaplata = Number(arg3);
    let soc_stipendiya = 0;
    let ex_stipendiya = 0;
    promenliva = Boolean;

    if (dohod < min_zaplata){
        soc_stipendiya = Math.floor(min_zaplata * 0.35);
    }
    if (sreden_uspeh < 4.5){
        soc_stipendiya = 0;
    }

    if (sreden_uspeh >= 5.5){
        ex_stipendiya = Math.floor(sreden_uspeh * 25);
    }
    if (soc_stipendiya + ex_stipendiya == 0){
        console.log("You cannot get a scholarship!");
    }
    else if (ex_stipendiya >= soc_stipendiya){
        console.log(`You get a scholarship for excellent results ${ex_stipendiya} BGN`)
    }
    else if(soc_stipendiya > ex_stipendiya){
        console.log(`You get a Social scholarship ${soc_stipendiya} BGN`)
    }
}


