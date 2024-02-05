// Number Check
function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

// const result = multiply(5, 'seven');
const result = multiply(5, 7);
console.log(result);




// String Check
function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'First name should be a string';
    }
    else if (typeof second !== 'string') {
        return 'Second Name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}

// const full = fullName('Akmal' , 7);
const full = fullName('Akmal' , 'Hasan');
console.log(full);





// Object Check
function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide an object'
    }
    const price = product.price;
    return price;
}

// const price = getPrice(5)
const price = getPrice({ name: 'chulkani dandi', price: 350, color: 'blue' });
console.log(price);






// Array Check
function getSecond(numbers) {
    if(Array.isArray(numbers) === false){
        return 'Please provide an array'
    }
    const second = numbers[1];
    return second;
}


// const second = getSecond({ name: 'chulkani dandi', price: 350, color: 'blue' });
const second = getSecond([45, 61, 2]);
console.log(second);