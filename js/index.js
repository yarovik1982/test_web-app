import { toggleActive } from "./navbar.js";
import { products, renderProducts } from "./products.js";
import { addToCart } from "./cart.js";
import { openModal } from "./modalCart.js";


const init = () => {
   const productsNode = document.querySelector('#products')
   const $cart = document.querySelector('#cart')
   const cartStorage = JSON.parse(localStorage.getItem('cart'))
   
   

   productsNode.addEventListener('click', e => {
      const curr = e.target
      if(curr.classList.contains('btn')){
         addToCart(curr, products)
      }
   })

   $cart.addEventListener('click',() => {
      openModal()
   })

   toggleActive()
   renderProducts(products)
}
init()