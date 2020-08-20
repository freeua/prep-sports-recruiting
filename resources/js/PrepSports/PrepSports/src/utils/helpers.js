export const convertToValidPrice = price => {
  if (price === 'Free') {
    return '0.00';
  } else if (!price.split('.')[0]) {
    return '0' + price;
  }
  return price;
};
