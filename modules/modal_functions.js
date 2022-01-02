
export function modals() {
  const compButton = document.querySelector('.nav-box-2')
  

//asignment ways to open popup on mobile and PC
if (window.matchMedia("(max-width: 500px)").matches) {
  mobileButton.addEventListener('click', () => {
  openpopup(popup)
  })
} else {
  compButton.addEventListener('click', () => {
    openpopup(popup)
  })
}

//closing popup on clicking overlay
overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active')
  popups.forEach(popup => {
    closepopup(popup)
  })
})

function openpopup(popup) {
  if (popup == null) return
  popup.classList.add('active')
  overlay.classList.add('active')
}

function closepopup(popup) {
  if (popup == null) return
  popup.classList.remove('active')
  overlay.classList.remove('active')
}

}