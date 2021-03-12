function aqua(arg1, arg2, arg3, arg4) {
        let l = Number(arg1);
        let w = Number(arg2);
        let h = Number(arg3);
        let percent = Number(arg4);
        let res1 = l * w * h / 100;
        let res2 = 1 - percent / 100;
        let result = res1 * res2;
        console.log(result);
}