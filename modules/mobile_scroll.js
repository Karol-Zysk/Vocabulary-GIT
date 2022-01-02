// Add scroll To function on mobile 

export function mobileScrolladdBtn(elem) {
    const swBtn = document.querySelector('.mobile-sw-btn')
    
    if (window.matchMedia("(max-width: 500px)").matches) {
      elem.addEventListener('click', () => window.scrollTo({
        top: 455,
        behavior: 'smooth',
      }));
      swBtn.style.display = "grid"
      swBtn.addEventListener('click', () => {
      openpopup(popup)
      })
    }
  }
   