export const cart = () => {
   const $cart = document.querySelector('#cart');
   const $products = document.querySelector('#products');
   let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
 
   function updateCartCount() {
      let count = 0
      for(let i = 0; i < cartStorage.length; i++){
         count += cartStorage[i].quantity
      }
     $cart.dataset.count = count
   }
 
   function productToCart(el) {
      const item = el.closest('.card');
      const itemBody = item.querySelector('.card-body');
      const product = {
        id: item.id,
        title: itemBody.children[0].textContent,
        quantity: 1,
        price: parseFloat(itemBody.children[2].textContent.split(' ')[0]),
        sum: parseFloat(itemBody.children[2].textContent.split(' ')[0])
      };
    
      const existingProduct = cartStorage.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.sum = existingProduct.price * existingProduct.quantity
      } else {
        cartStorage.push(product);
      }
      localStorage.setItem('cart', JSON.stringify(cartStorage));
      updateCartCount();
    }
    
 
   $products.addEventListener('click', e => {
     const curr = e.target;
     if (curr.classList.contains('btn-primary')) {
       productToCart(curr);
     }
   });
 
   updateCartCount();
 
   function unScroll () {
      const body = document.body
      body.classList.add('unscroll')
   }

   function openCart(){
      const layout = document.querySelector('.layout')
      const layoutContent = document.querySelector('.layout-content')
      
      layout.classList.add('open')
      layoutContent.classList.add('active')
      unScroll()
      
   }
   $cart.addEventListener('click',openCart)
 };
 