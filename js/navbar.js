export const toggleActive = (elTarget, links) => {
   if(elTarget.matches('nav-link')){
      links.forEach(link => {
         link.classList.remove('active')
      })
      elTarget.classList.add('active')
   }
 }
 