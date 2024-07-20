export const useProducts = {
    render(container, arr) {
        if (!container) return;
        container.innerHTML = arr.map((p, i) => `<div class="col">
        <div class="card h-100" id="${i}">
          <img src="${p.productImage}" class="card-img-top" alt="${p.productTitle}">
          <div class="card-body">
            <h5 class="card-title">${p.productTitle}</h5>
            <p class="card-text">${p.productDescription}</p>
            <p class="card-text">${p.productPrice} ₽</p>

          </div>
          <div class="card-footer">
            <div class="d-flex align-items-center py-1 justify-content-between">
              <buttom class="btnAdd btn btn-primary btn-sm">В корзину</buttom>
            </div>
          </div>
        </div>
      </div>`).join("");
    },
};
