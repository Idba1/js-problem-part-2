function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    const sub = num1 - num2;
    return sub;
}

function multiply(num1, num2) {
    const multi = num1 * num2;
    return multi;
}

function divide(num1, num2) {
    const divide = num1 / num2;
    return divide;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'divide'){
        const result = divide(a, b);
        return result;
    }
    else {
        return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed."
    }
}


const result = calculator(35, 7, 'add');
console.log(result);
const result2 = calculator(35, 7, 'subtract');
console.log(result2);
const result3 = calculator(35, 7, 'multiply');
console.log(result3);
const result4 = calculator(35, 7, 'divide');
console.log(result4);