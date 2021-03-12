function stopOn(arg1) {
    let words = String(arg1);
    let i = 0;
    while (words[i] != "Stop") {
        console.log(words[i]);
        i++;
    }
}
stopOn(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
;