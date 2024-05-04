import { Product, taxCalculation } from './06-functions-destructuring';

const shoopingCart: Product[] = [
    {
        description: 'Nokia 1100',
        price: 150.0
    },
    {
        description: 'iPad Air',
        price: 250.0
    }
];

const [total, tax] = taxCalculation({
    products: shoopingCart,
    tax: 0.15
});

console.log('Total: ', total);
console.log('Tax: ', tax);