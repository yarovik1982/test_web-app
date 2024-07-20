import { storage } from "./storage.js"
import { sendData } from "./fetchData.js"
export function openModal() {
   const body = document.body
   const layout = document.querySelector('#layout')
   const layoutContent = document.querySelector('.layout-content')
   const btnClose = layoutContent.querySelector('.bi-x-lg')
   const table = document.querySelector('table')
   const cartStorage = JSON.parse(localStorage.getItem('cart')) || []
   const contentForm = layout.querySelector('.layout-content-form')
  //  const form = layoutContent.querySelector('form')

   body.classList.add('unscroll')
   layout.classList.add('open')
   layoutContent.classList.add('active')

   setPosition(layout)
   renderCart( table, cartStorage)

   layout.addEventListener('click', (e) => {
      const curr = e.target
      if(curr === btnClose || !curr.closest('.layout-content')){
         closeModal(body, layout, layoutContent)
      }
      if(curr.id == 'clear'){
         storage.clear()
         renderCart(table, cartStorage)
      }
      if(curr.id == "send"){
         openForm(contentForm, layoutContent)
      }
      
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

 function transformForOut(){
  let total = 0
  const sourse = storage.get('cart')
  const raw = sourse.map(item => ({
    "productTitle": item.productTitle,
    "productPrice": item.productPrice,
    "quantity": item.quantity,
    "sum": item.sum
  }))

  for(let i = 0; i < raw.length; i++){
    total += raw[i].sum
  }
  const str = sourse.map(item => `${item.productTitle}\t${item.quantity}\t${item.sum}\n`).join('') + 'Всего на сумму: ' + total
  return [raw, total, str]
 }

 function openForm(contentForm, layoutContent) {

  layoutContent.classList.remove('active');
  contentForm.classList.add('active');

  const orderText = contentForm.querySelector('.order');

  const [ cartItems, totalAmount, str ] = transformForOut();
  const tableBody = orderText.querySelector('tbody');

  if (tableBody) {
    tableBody.innerHTML = cartItems.map(item => `
      <tr>
        <td>${item.productTitle}</td>
        <td>${item.quantity}</td>
        <td>${item.sum}&nbsp;₽</td>
      </tr>
    `).join('');
  } else {
    const table = document.createElement('table');
    table.classList.add('table');

    const tableBody = document.createElement('tbody');
    tableBody.innerHTML = cartItems.map(item => `
      <tr>
        <td>${item.productTitle}</td>
        <td>${item.quantity}</td>
        <td>${item.sum}&nbsp;₽</td>
      </tr>
    `).join('');

    const tfoot = document.createElement('tfoot');
    tfoot.innerHTML = `
      <tr>
        <td >Всего на сумму</td>
        <td colspan="2">${totalAmount}&nbsp;₽</td>
      </tr>
    `;

    table.appendChild(tableBody);
    table.appendChild(tfoot);
    orderText.innerHTML = '';
    orderText.appendChild(table);
  }

  const closeForm = contentForm.querySelector('#closeForm');
  closeForm.addEventListener('click', handleCloseForm);
  console.log(str);

  
}

function handleCloseForm() {
  const contentForm = document.querySelector('.content-form.active');
  const layout = document.querySelector('#layout');

  contentForm.classList.remove('active');
  layout.classList.remove('open');
}



 
 