import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishist = [];

console.log("Welcome to your Cart!");
const item1 = await createItem("Playstation 5", 4700, 1);
const item2 = await createItem("Pente de Memória XPG SPEC", 439.99, 4);
const item3 = await createItem("Teclado Magnetico AULA", 469.79, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.deleteAllItens(myCart, item1.name);

await cartService.addItem(myCart, item3);

await cartService.calculateTotal(myCart);

console.log();
await cartService.displayCart(myCart);
