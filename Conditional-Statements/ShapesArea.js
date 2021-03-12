function ShapesArea(arg1, arg2, arg3) {
        let num1 = Number(arg2);
        let num2 = Number(arg3);
        let result = 0
        if (arg1 == "square") {
            result = num1*num1;
        }
        else if (arg1 == "rectangle") {
            result = num1 * num2;
        }
        else if (arg1 == "circle") {
            result = Math.PI * (num1*num1);
        }
        else {
            result = (num2*num1) / 2;
        }
        console.log(result.toFixed(3));
}