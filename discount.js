function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(1);
console.log(total);
const total2 = discountedPrice(101);
console.log(total2);
const total3 = discountedPrice(201);
console.log(total3);