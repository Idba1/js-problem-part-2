/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(1, 1, 4);
console.log('wood needed', wood);






/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 * 
*/

function totalShoping(Shirt, pant, shoe){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirtPrice = Shirt * shirtPrice;
    const totalPantPrice = pant * pantPrice;
    const totalShoePrice = shoe * shoePrice;

    const totalShopingPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalShopingPrice;
}

const shoping = totalShoping(1,1,2);
console.log('Total Shoping Cost', shoping);