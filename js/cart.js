
   const $cart = document.querySelector('#cart');
   
   let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
 

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
      updateCartCount()
   }

   function updateCartCount() {
      let count = 0
      for(let i = 0; i < cartStorage.length; i++){
         count += cartStorage[i].quantity
      }
     $cart.dataset.count = count
   }
 
   // function productToCart(el) {
   //    const item = el.closest('.card');
   //    const itemBody = item.querySelector('.card-body');
   //    const product = {
   //      id: item.id,
   //      title: itemBody.children[0].textContent,
   //      quantity: 1,
   //      price: parseFloat(itemBody.children[2].textContent.split(' ')[0]),
   //      sum: parseFloat(itemBody.children[2].textContent.split(' ')[0])
   //    };
    
   //   
   //    localStorage.setItem('cart', JSON.stringify(cartStorage));
   //    updateCartCount();
   //  }
    
 
   // $products.addEventListener('click', e => {
   //   const curr = e.target;
   //   if (curr.classList.contains('btn-primary')) {
   //     productToCart(curr);
   //   }
   // });
 
   // updateCartCount();
 
   // function unScroll () {
   //    const body = document.body
   //    body.classList.add('unscroll')
   // }

   // function openCart(){
   //    const layout = document.querySelector('.layout')
   //    const layoutContent = document.querySelector('.layout-content')
   //    layout.classList.add('open')
   //    layoutContent.classList.add('active')
   //    unScroll()
   //    renderCart()
   // }

   // function renderCart(){
   //    const tBody = document.querySelector('tbody') || null
   //    if(!tBody)return
   //    tBody.innerHTML = cartStorage.map((product, ind) => `<tr class='proluct'>
   //            <th scope="row">${ind + 1}</th>
   //            <td class="title">${product.title}</td>
   //            <td class="quantity">${product.quantity}</td>
   //            <td class="price">${product.price}</td>
   //            <td class="sum">${product.sum}</td>
   //            <td class="actions">
   //              <div class='d-flex align-items-center'>
   //              <i class="bi bi-plus-square-dotted fs-2" onclick="increment(this)"></i>
   //              <i class="bi bi-dash-square-dotted fs-2 ms-3 me-3" onclick="decrement(this)"></i>
   //              <i class="bi bi-trash3 fs-2" onclick="delete(this)"></i>
   //              </div>
   //            </td>
   //          </tr>`).join('')
      
   //          function increment(el) {
   //             const row = el.closest('tr');
   //             const quantityEl = row.querySelector('.quantity');
   //             let quantity = parseInt(quantityEl.textContent);
   //             quantity++;
   //             quantityEl.textContent = quantity;
   //             const title = row.querySelector('.title').textContent;
   //             const product = cartStorage.find(p => p.title === title);
   //             product.quantity = quantity;
   //             product.sum = product.price * quantity;
   //             localStorage.setItem('cart', JSON.stringify(cartStorage));
   //             renderCart();
   //           }
   // }

    
   //  function decrement(el) {
   //    const row = el.closest('tr');
   //    const quantityEl = row.querySelector('.quantity');
   //    let quantity = parseInt(quantityEl.textContent);
   //    if (quantity > 1) {
   //      quantity--;
   //      quantityEl.textContent = quantity;
   //      const title = row.querySelector('.title').textContent;
   //      const product = cartStorage.find(p => p.title === title);
   //      product.quantity = quantity;
   //      product.sum = product.price * quantity;
   //      localStorage.setItem('cart', JSON.stringify(cartStorage));
   //      renderCart();
   //    }
   //  }
    
   //  function deleteItem(el) {
   //    const row = el.closest('tr');
   //    const title = row.querySelector('.title').textContent;
   //    const index = cartStorage.findIndex(p => p.title === title);
   //    cartStorage.splice(index, 1);
   //    localStorage.setItem('cart', JSON.stringify(cartStorage));
   //    row.remove();
   //    renderCart();
   //  }
    

   // $cart.addEventListener('click',openCart)
 
 