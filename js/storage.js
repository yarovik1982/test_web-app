export const storage = {
   get(key) {
     return JSON.parse(localStorage.getItem(key)) || [];
   },
 
   set(key, value) {
     localStorage.setItem(key, JSON.stringify(value));
   },
 
   getItem(key, fieldName) {
     const storageData = this.get(key);
     if (!storageData || !Array.isArray(storageData)) {
       return null;
     }
     const item = storageData.find((i) => i[fieldName] === fieldName);
     return item || null;
   },
 
   setItem(key, fieldName, value) {
     const item = this.getItem(key, fieldName);
     if (!item) {
       return;
     }
     item[fieldName] = value;
     this.set(key, this.get(key));
   },
 
   update(key, updatedData) {
     const currentData = this.get(key);
     if (!currentData || !Array.isArray(currentData)) {
       return;
     }
     const updatedArray = currentData.map((item) => {
       const itemToUpdate = updatedData.find((i) => i.id === item.id);
       return itemToUpdate ? { ...item, ...itemToUpdate } : item;
     });
     this.set(key, updatedArray);
   },
 
   remove(key) {
     localStorage.removeItem(key);
   },
 
   clear() {
     localStorage.clear();
   },
 
   keys() {
     return Object.keys(localStorage);
   },
 
   length() {
     return localStorage.length;
   },
 };
 