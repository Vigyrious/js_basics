function wordCount(arg1) {
    let text = String(arg1);
    let res = 0;
    for (let i = 0 ; i <= text.length ; i ++) {
        if (text[i] === " ") {
            res += 1;
        }
    }
    res += 1;
    if (res <= 10) {
        console.log(`The message was send successfully!`)
    }
    else {
        console.log(`The message is too long to be send! Has ${res} words.`)
    }
}