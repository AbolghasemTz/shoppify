export const checkInCart = (cart, id) => {
  return cart.find((f) => f.id === id);
};
