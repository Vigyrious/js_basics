function password(arg1) {
    let username = arg1[0];
    let password = arg1[1];
    let i = 2;
    while (password != arg1[i]) {
        i++;
    }
    console.log(`Welcome ${username}!`);
}