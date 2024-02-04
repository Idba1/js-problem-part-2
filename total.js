const numbers = [300, 100, 700, 1200];


const products = [
    { name: 'shampoo', price: 300 },
    { name: 'chiruni', price: 50 },
    { name: 'shirt', price: 1500 },
    { name: 'pant', price: 1800 },
    { name: 'watch', price: 3600 }
]

function getShoppingTotal (products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total ajke khosabe: ', total);