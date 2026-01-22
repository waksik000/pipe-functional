import { data } from '../src/data.js';
export const sumPrices = (products) => {
 return products.reduce((accumulator, product)=>{
    return accumulator += product.price;
  }, 0)
};

export const groupByCategory = (products) => {
  return products.reduce((acc, product) => {
    const category = product.category

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push(product)
    
    return acc
  },{})
};

