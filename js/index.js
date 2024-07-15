import { toggleActive } from "./navbar.js";
import { products, renderProducts } from "./products.js";
import { addToCart } from "./cart.js";


const init = () => {
   const productsNode = document.querySelector('#products')
   
   
   

   productsNode.addEventListener('click', e => {
      const curr = e.target
      if(curr.classList.contains('btn')){
         addToCart(curr, products)
      }
   })
   toggleActive()
   renderProducts(products)
}
init()