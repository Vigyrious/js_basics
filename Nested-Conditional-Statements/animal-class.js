function animalType(input) {
    let animal = String(input);
    switch(animal) {
        case "dog": console.log("mammal");break;
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile");break;
        default: console.log("unknown");break;
    }
}