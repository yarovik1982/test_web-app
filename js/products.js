export const products =  [
   {id:1,productTitle:'Ролл угорь стандарт',productDescription:'Рис, угорь, соус унаги, кунжут, водоросли нори.',productPrice:250,productImage:"./images/product-1.jpg"},
   {id:2,productTitle:'Калифорния лосось стандарт',productDescription:'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',productPrice:395,productImage:"./images/product-2.jpg"},
   {id:3,productTitle:'Окинава стандарт',productDescription:' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',productPrice:250,productImage:"./images/product-3.jpg"},
   {id:4,productTitle:'Цезарь маки хl',productDescription:'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',productPrice:250,productImage:"./images/product-4.jpg"},
   {id:5,productTitle:'Ясай маки стандарт 185 г',productDescription:'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',productPrice:250,productImage:"./images/product-5.jpg"},
   {id:6,productTitle:'Ролл с креветкой стандарт',productDescription:'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',productPrice:250,productImage:"./images/product-6.jpg"},
]

export function renderProducts(arr){
   const parent = document.querySelector('#products')
   parent.innerHTML = arr.map((p, i) => `<div class="col">
        <div class="card h-100" id="${i}">
          <img src="${p.productImage}" class="card-img-top" alt="${p.productTitle}">
          <div class="card-body">
            <h5 class="card-title">${p.productTitle}</h5>
            <p class="card-text">${p.productDescription}</p>
            <p class="card-text">${p.productPrice} ₽</p>

          </div>
          <div class="card-footer">
            <div class="d-flex align-items-center py-1 justify-content-between">
              <buttom class="btn btn-primary btn-sm">В корзину</buttom>
            </div>
          </div>
        </div>
      </div>`).join('')
   
}