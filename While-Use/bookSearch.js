function bookSearch(arg1) {
    let search = arg1[0];
    let i = 1;
    let isFound = false;
    while (i <= arg1.length && arg1[i] !== "No More Books") {
        if (search === arg1[i]) {
            isFound = true;break;
        }
        i++;
    }
    if(isFound) {
        console.log(`You checked ${i-1} books and found it.`)
    }
    else {
        console.log("The book you search is not here!");
        console.log(`You checked ${i-1} books.`)
    }
}
bookSearch(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
])


;