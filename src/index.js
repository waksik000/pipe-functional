import { ProductGroupWithSumPrice, GetFiltredSortName, GetSortedNamesInStock } from './processors.js'
import { data } from './data.js'

const result1 = GetSortedNamesInStock()(data)
console.log('Sorted Names In Stock:', result1)

const result2 = GetFiltredSortName()(data)
console.log('Filtered and Sorted Electronics with Tax:', result2)

const result3 = ProductGroupWithSumPrice()(data)
console.log('Product Group with Sum Price:', result3)






