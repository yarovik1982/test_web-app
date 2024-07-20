import { storage } from "./storage.js";
import { useModal } from "./useModal.js";

   
   let cartStorage = storage.get('cart')
   console.log(cartStorage);
 
   useModal.setCount(cartStorage)

   export function addToCart(el, products){
      const index = el.closest('.card').id
      const product = products[index]
      product.quantity = 1
      product.sum = product.productPrice
      const existingProduct = cartStorage.find(p => p.id === product.id);
         if (existingProduct) {
           existingProduct.quantity++;
           existingProduct.sum = existingProduct.productPrice * existingProduct.quantity
         } else {
           cartStorage.push(product);
         }
      localStorage.setItem('cart', JSON.stringify(cartStorage))
      useModal.setCount(cartStorage)
   }

   // function updateCartCount() {
   //    let count = 0
   //    for(let i = 0; i < cartStorage.length; i++){
   //       count += cartStorage[i].quantity
   //    }
   //    if(!$cart)return
   //   $cart.dataset.count = count
   // }
 
   
 
 