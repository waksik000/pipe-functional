export const filterByCategory = (category) => {
  return (products) => {
    return products.filter(p => p.category === category);
  };
};

export const filterInStock = (goods) => {
    return goods.filter((product => {return product.inStock === true}))
}


