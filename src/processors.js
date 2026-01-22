import pipe from './pipeline.js'
import { data } from './data.js'
import { filterByCategory, filterInStock } from './filters.js'
import { mapToNames, mapToPriceWithTax } from './mappers.js'
import { groupByCategory, sumPrices } from './reducers.js'

export const sortByPriceAsc = products => {
  const sortedProducts = [...products]

  sortedProducts.sort((a, b) => a.price - b.price)

  return sortedProducts
}
export const sortByPriceDesc = products => {
  const sortedProducts = [...products]

  sortedProducts.sort((a, b) => b.price - a.price)

  return sortedProducts
}

const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true, category: 'Electronics' },
  { id: 2, name: 'Mouse', price: 25, inStock: false, category: 'Electronics' },
  {
    id: 3,
    name: 'Monitor',
    price: 350,
    inStock: true,
    category: 'Electronics',
  },
  { id: 4, name: 'Desk', price: 200, inStock: false, category: 'Furniture' },
  { id: 5, name: 'Chair', price: 150, inStock: true, category: 'Furniture' },
  {
    id: 6,
    name: 'Keyboard',
    price: 80,
    inStock: false,
    category: 'Electronics',
  },
]

export const GetSortedNamesInStock = () => {
  return pipe(filterInStock, mapToNames, names => [...names].sort())
}

export const GetFiltredSortName = () => {
  return pipe(
    filterByCategory('Electronics'),
    mapToPriceWithTax(0.15),
    sortByPriceAsc,
  )
}

export const ProductGroupWithSumPrice = () => {
  return pipe(groupByCategory, sumPrices)
}

// 1