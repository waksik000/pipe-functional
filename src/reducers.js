import { data } from '../src/data.js'
export const sumPrices = groupedByCategory => {
  return Object.entries(groupedByCategory).reduce(
    (acc, [category, products]) => {
      acc[category] = products.reduce((sum, product) => sum + product.price, 0)
      return acc
    },
    {},
  )
}

export const sumPricesByCategory = products =>
  products.reduce((acc, p) => {
    acc[p.category] ??= 0
    acc[p.category] += p.price
    return acc
  }, {})

export const groupByCategory = products => {
  return products.reduce((acc, product) => {
    const category = product.category

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push(product)

    return acc
  }, {})
}
