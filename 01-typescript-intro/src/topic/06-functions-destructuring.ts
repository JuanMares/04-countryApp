export interface Product{
    description: string;
    price: number;
}

interface TaxCalculationOptions{
    products: Product[];
    tax: number;
}

// const phone: Product = {
//     description: 'Nokia 1100',
//     price: 150.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 250.0
// }

export function taxCalculation(options:TaxCalculationOptions):[number,number]{
    
    const {products, tax} = options;
    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];

}

// const shoppingCart: Product[] = [phone, tablet];
// const tax = 0.15;

// const [total, totalTax] = taxCalculation({
//     products: shoppingCart, 
//     tax:tax
// });

// console.log('Total: ', total)
// console.log('Tax: ', totalTax)
