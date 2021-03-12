function birthdayParty(input) {
    let rent_hall = Number(input);
    let cake = rent_hall / 5;
    let drinks = cake * 0.55;
    let animator = rent_hall / 3;
    let result = rent_hall + cake + drinks + animator;
    console.log(result)
}
birthdayParty("3720");
