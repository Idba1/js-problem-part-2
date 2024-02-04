const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is', max);






// homework: min number
const heights2 = [65, 58, 66, 68, 72, 78, 60, 65, 66, 5];

function mathMin(numbers){
    let min = numbers[0];
    for(const num2 of numbers){
        if(num2 < min){
            min = num2;
        }
    }
    return min;
}

const min = mathMin(heights2);
console.log('min value is', min);