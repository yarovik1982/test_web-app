export const toggleActive = () => {
   const links = document.querySelectorAll('.nav-link')

   links.forEach(link => {
      link.addEventListener('click', (e)=> {
         links.forEach(link => {
            link.classList.remove('active')
         })
         e.target.classList.add('active')
      })
   })
   
}