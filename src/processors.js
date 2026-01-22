import pipe from './pipeline.js'
import { filterByCategory, filterInStock} from './filters.js'
import { mapToNames, mapToPriceWithTax } from './mappers.js';


export const sortByPriceAsc = (products) => {
    const sortedProducts = [...products]

    sortedProducts.sort((a, b) => a.price - b.price)

    return sortedProducts
};
export const sortByPriceDesc = (products) => {
    const sortedProducts = [...products]

    sortedProducts.sort((a, b) => b.price - a.price)

    return sortedProducts
};

const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Monitor", price: 350 },
    { id: 4, name: "Desk", price: 200 },
    { id: 5, name: "Chair", price: 150 },
    { id: 6, name: "Keyboard", price: 80 }
];

export const GetSortedNamesInStock = () => {
    return pipe(
        filterInStock,
        mapToNames,
        (names) => [...names].sort
    )
}
const result = GetSortedNamesInStock()(products)
console.log(result)