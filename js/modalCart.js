export function openModal(arr) {
   const body = document.body
   const layout = document.querySelector('#layout')
   const layoutContent = document.querySelector('.layout-content')
   const btnClose = layoutContent.querySelector('.bi-x-lg')
   const table = document.querySelector('table')

   body.classList.add('unscroll')
   layout.classList.add('open')
   layoutContent.classList.add('active')

   setPosition(layout)
   renderCart( table, arr)

   btnClose.addEventListener('click', () => {
      closeModal(body, layout, layoutContent)
   })
}

function setPosition (el){
   const posTop = window.scrollY
   el.style.top = posTop + 'px'
}

function closeModal(b, l, c){
   b.classList.remove('unscroll')
   l.classList.remove('open')
   c.classList.remove('active')
}

function renderCart(table, arr) {
   let tbody = table.querySelector('tbody');
   let tfoot = table.querySelector('tfoot');
 
   if (!tbody) {
     tbody = document.createElement('tbody');
     table.appendChild(tbody);
   }
   if (!tfoot) {
     tfoot = document.createElement('tfoot');
     table.appendChild(tfoot);
   }
 
   tbody.innerHTML = '';
 
   let total = 0;
   tbody.innerHTML = arr.map((product, ind) => `<tr>
     <th scope="row">${ind + 1}</th>
     <td class="title">${product.productTitle}</td>
     <td class="quantity">${product.quantity}</td>
     <td class="price">${product.productPrice}</td>
     <td class="sum">${product.sum}</td>
     <td class="actions">
       <div class="d-flex align-items-center">
         <i class="bi bi-plus-square-dotted fs-2" id="increment"></i>
         <i class="bi bi-dash-square-dotted fs-2 ms-3 me-3" id="decrement"></i>
         <i class="bi bi-trash3 fs-2" id='delete'></i>
       </div>
     </td>
   </tr>`).join('');
 
   for (let i = 0; i < arr.length; i++) {
     total += arr[i].sum;
   }
 
   if (tfoot.querySelector('#total')) {
     tfoot.querySelector('#total').textContent = total;
   } else {
     tfoot.innerHTML = `<th scope="row" colspan="4">Итого</th>
       <th colspan="2" id="total">${total}</th>`;
   }
 }
 