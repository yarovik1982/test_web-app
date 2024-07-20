// const token = 'ВАШ_ТОКЕН_БОТА';
// const chatId = 'ВАШ_CHAT_ID';
import { params } from "./appConfig.js";
import { storage } from "./storage.js";

export const setMessage = () => {
   let total = 0
   const outStorage = storage.get('cart').map(item => ({
      "productTitle": item.productTitle,
      "productPrice": item.productPrice,
      "quantity": item.quantity,
      "sum": item.sum
   }))
   for(let i = 0; i < outStorage.length; i++){
      total += outStorage[i].sum
   }
   return outStorage.map(item => `${item.productTitle}\t${item.quantity}\t${item.sum}\n`).join('') + 'Всего на сумму: ' + total
}
 

export const sendData = (formData) => {
   const mess = setMessage()
   fetch(`${params.TG_URL}/bot${params.bot_id}/sendMessage`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          formData,
          chat_id: chatId,
          text: mess
      })
  })
  .then(response => response.json())
  .then(data => {
      if (data.ok) {
          console.log('Сообщение отправлено:', data.result);
      } else {
          console.error('Ошибка отправки сообщения:', data);
      }
  })
  .catch(error => {
      console.error('Ошибка сети:', error);
  });
}
