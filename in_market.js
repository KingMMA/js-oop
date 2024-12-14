let basket = [];

basket.push('молоко');
basket.push('хліб');
basket.push('кола');
basket.push('печиво');

console.log(basket);

while (basket.length > 0) {
    let item = basket.pop();
    console.log(`Ви дістали: ${item}`);
}

console.log('Корзина порожня');
