// import { toggleActive } from "./navbar.js";
import { productList } from "./data.js";
import { useProducts } from "./products.js";
import { addToCart } from "./cart.js";
import { openModal } from "./modalCart.js";
import { storage } from "./storage.js";
import { params } from "./appConfig.js";
import { setMessage } from "./fetchData.js";
import { useModal } from "./useModal.js";

console.log(useModal.count);
const init = () => {
    const productsNode = document.querySelector("#products");
    const $cart = document.querySelector("#cart");
    const cartStorage = storage.get("cart");
    const links = document.querySelectorAll("." + params.nav_link._class);

    document.addEventListener("click", (e) => {
        const current = e.target;
        if (current.matches("." + params.nav_link._class)) {
            links.forEach((link) => {
                link.classList.remove(params.nav_link._activeClass);
            });
            current.classList.add(params.nav_link._activeClass);
        }
        if (current.classList.contains("btnAdd")) {
            addToCart(current, productList);
        }
        if (current.id == "cart") {
            openModal();
        }
        if(e.target.classList.contains('para-link')){
         unDir()
      }
    });

    useProducts.render(productsNode, productList);

    function formatOrder(data) {
      const formattedOrder = [];
      formattedOrder.push(`name: ${data.name}`);
      formattedOrder.push(`tel: ${data.tel}`);
      
      const orderLines = data.order.split('\n');
      orderLines.forEach(line => {
          const parts = line.split('\t');
          if (parts.length === 3) {
              formattedOrder.push(`${parts[0]} - ${parts[1]} - ${parts[2]}`);
          }
          if(parts.length === 1){
            formattedOrder.push(`${parts[0]}`)
          }
      });
  
      return formattedOrder.join('\n');
  }

    function sendData() {
        const form = document.querySelector("form") || null;
        if (!form) return;
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const mess = setMessage();
            const formData = {
               name:form.querySelector('#inpName').value,
               tel:form.querySelector('#inpTel').value,
               order:mess
            }
            const orderData = formatOrder(formData)
            fetch(`${params.TG_URL}/bot${params.bot_id}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
               //  body:formData
                body: JSON.stringify({
                  
                    chat_id:`${params.group_id}`,
                    text: orderData,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.ok) {
                        console.log("Сообщение отправлено:", data.result);
                    } else {
                        console.error("Ошибка отправки сообщения:", data);
                    }
                })
                .catch((error) => {
                    console.error("Ошибка сети:", error);
                });
        });
    }
    sendData()
};
init();

