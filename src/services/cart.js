async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteAllItens(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, index) {}

async function calculateTotal(userCart) {
  console.log("\nCart Total is: ");

  const result = userCart.reduce((total, item) => {
    return total + item.subtotal();
  }, 0);

  console.log(result);
}

async function displayCart(userCart) {
  console.log("🛒 All Itens in your Cart: ");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}: ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal: R$ ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteAllItens, removeItem, displayCart };
