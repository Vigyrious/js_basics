function numOp(arg1,arg2,arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let op = String(arg3);
    let oddEven = "";
    let result = 0;
    if (op === "+") {
        result = num1 + num2;
        if (result % 2 == 0) {
            oddEven = "even";
        }
        else {
            oddEven = "odd";
        }
        console.log(`${num1} + ${num2} = ${result} - ${oddEven}`);
    }
    else if (op === "-") {
        result = num1 - num2;
        if (result % 2 == 0) {
            oddEven = "even";
        }
        else {
            oddEven = "odd";
        }
        console.log(`${num1} - ${num2} = ${result} - ${oddEven}`);
    }
    else if (op === "*") {
        result = num1 * num2;
        if (result % 2 == 0) {
            oddEven = "even";
        }
        else {
            oddEven = "odd";
        }
        console.log(`${num1} * ${num2} = ${result} - ${oddEven}`);
    }
    else if (op === "/") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
        
    }
    else if (op === "%") {
        if (num2 === 0){
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
    }
    }
}