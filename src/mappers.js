

export const mapToNames = (products) => {
   const arr = products.map(Item => Item.name)
   return arr
};


export const mapToPriceWithTax = (taxRate) => {
  return (products) => 
    products.map((item) => ({
      ...item,
      price: item.price* taxRate
    }))
};

