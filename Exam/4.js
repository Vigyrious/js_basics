function a(a1) {
    k = 0;
    food = Number(a1[k]) * 1000;
    k++;
    let grams = a1[k];
    k++;
    let total = 0;
    while(grams != "Adopted") {
        total += Number(grams);
        grams = a1[k];
        k++;
    }
    if (total > food) {
        console.log(`Food is not enough. You need ${total - food} grams more.`);
    }
    else {
        console.log(`Food is enough! Leftovers: ${food - total} grams.`);
    }
}
a([
    '4',   '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted',
    '',    ''
  ])