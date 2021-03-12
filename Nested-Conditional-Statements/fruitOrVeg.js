function fruitVeg(arg1) {
    let fruiVeg = String(arg1);
    if (fruiVeg === "kiwi" || fruiVeg === "cherry" || fruiVeg === "banana" || fruiVeg === "lemon" || fruiVeg === "grapes" || fruiVeg === "apple") {
        console.log("fruit");
    }
    else if (fruiVeg === "tomato" || fruiVeg === "cucumber" || fruiVeg === "pepper" || fruiVeg === "carrot" ) {
        console.log("vegetable");
    }
    else {
        console.log("unknown");
    }
}