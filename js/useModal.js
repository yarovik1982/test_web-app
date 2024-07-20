//  import { storage } from "./storage.js"

 export const useModal = {
   typeModal:'',
   // count: 0,
   cartNode: document.getElementById('cart'),
   
   setType(value){
      this.typeModal = value
   },
   getType(){
      return this.typeModal
   },
   // getCount(){
   //    return this.count
   // },
   setCount(data){
      let countTotal = 0 
      if(data){
         for(let i = 0; i < data.length; i++){
            countTotal += data[i].quantity
         }
      }
      // this.count = countTotal
      this.cartNode.dataset.count = countTotal

   },
   render(data){
      
   },
}
useModal.setType('form')
const newType = useModal.getType()
console.log(newType);
console.log(useModal.count);