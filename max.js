// If else
const disha = 56;
const salman = 95;

if (disha > salman) {
    console.log('Disha will get the strawberry')
}
else {
    console.log('salman will eat the strawberry')
}

// function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(196, 709);
const max2 = getMax(96, 198);
const ultimateMax = getMax(max1, max2);

console.log('max of two is:', ultimateMax);