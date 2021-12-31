import { AnimalFetch } from "./modules/fetch_functions.js"
import { VehicleFetch } from "./modules/fetch_functions.js";
import { FruitsFetch } from "./modules/fetch_functions.js";

const container = document.querySelectorAll('.item')
const contain = document.querySelector('.container')
const headerBox = document.querySelectorAll('.header-box')
const contentBox = document.querySelectorAll('.cnt-bx')
const overlay = document.getElementById('overlay')
const animalsButton = document.querySelector('.pop-box1')
const vehicleButton = document.querySelector('.pop-box2')
const fruitsButton = document.querySelector('.pop-box3')
const animalSound = document.querySelectorAll('.animalSound')
const vehicleSound = document.querySelectorAll('.vehicleSound')
const fruitSound = document.querySelectorAll('.fruitSound')
const menu1 = document.getElementById('menu1')
const footerSpan = document.querySelector('.footerSpan')
const mobileButton = document.querySelector('.nav-box-3')
const compButton = document.querySelector('.nav-box-2')
const swBtn = document.querySelector('.mobile-sw-btn')

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

//Animation navbar fix
container.forEach((elem, index) => {
    elem.style.animation = 'to-grey 0.5s alternate linear forwards'
    elem.style.animationDelay = `${(index/3) +0.3}s`
});

// Header letters Animation
headerBox.forEach((elem , index) => {
    elem.style.animation = 'Animals-animation ease-in 1s alternate infinite'
    elem.style.animationDelay = `${(index/10)+0.1}s`
});

let values = [3,0]

  animalsButton.addEventListener('click',  animalTimeOut )

  //Styling Elements while changing categories

  class CategoryChange {
    constructor(names, index, elem, category, bgImage){
    this.names = names;
    this.index = index;
    this.elem = elem;
    this.category = category;
    this.bgImage = bgImage;
    }
    categoryChange(){
        
  mobileButton.style.pointerEvents ="none"
  this.elem.style.animation = 'opacity 0.5s linear'
  //Removing styles and add style of clicked category
  this.elem.classList.remove(`vehicle-box${this.index+1}`)
  this.elem.classList.remove(`fruits-box${this.index+1}`)
  this.elem.classList.remove(`animals-box${this.index+1}`)
  this.elem.classList.remove('cnt-img')
  this.elem.classList.add(`${this.names}${this.index+1}`)
  container.forEach(elem => {
      elem.style.animation = 'to-transparent1 0.3s linear forwards alternate'
      contain.style.backgroundImage = `url('./img/${this.bgImage}.jpg')`
      menu1.style.display = "block"
      menu1.innerHTML = ''
    document.querySelector('.nav-box-3').innerText = `Select an ${this.category} to hear it and display facts `
  })
    }
  }

//Boxes conected to sounds

function playSound(name, index) {
  values.push(index)
  values.shift()
  let myValue = values[`${values.length-2}`]
  name[myValue].pause();
  name[myValue].currentTime = 0  
  name[index].play()
}

//Adding scroll function and new switch category button to mobile version
function mobileScrolladdBtn(elem) {
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
 
//Footer Texts
const TextA = "The expert in anything was once a begginer."
const TextB = "Never stop learning, becouse life never stops teaching."
const TextC = "Learning how to learn is life's most important skill."



function animalTimeOut() {
  footerSpan.innerText = `${TextA}`
  document.querySelector(".btn").innerText = "Switch"
contentBox.forEach((elem, index)=>{

  // Boxes Appearing one by one not all at one time
    setTimeout(() => {
        mobileScrolladdBtn(elem)
        let animalCategory = new CategoryChange("animals-box", index, elem, "animal", "jungle")
        animalCategory.categoryChange()
      }, 
      (index+1)*200);

      elem.onclick = function  soundAndInfo(){
        if (elem.classList.contains(`animals-box${index+1}`)) {
          menu1.style.animation = 'menu-change 0.3s forwards'
          AnimalFetch(index)
          playSound(animalSound, index)
        }
      }       
  })
  popup.classList.remove('active')
overlay.classList.remove('active')
}


vehicleButton.addEventListener('click',  vehicleTimeOut )
  function vehicleTimeOut() {
    footerSpan.innerText = `${TextB}`
    document.querySelector(".btn").innerText = "Switch"
      contentBox.forEach((elem, index)=>{

// Boxes Appearing one by one not all at one time
          setTimeout(() => {
      mobileScrolladdBtn(elem)
      let vehicleCategory = new CategoryChange("vehicle-box", index, elem, "vehicle", "road")
      vehicleCategory.categoryChange()
    }, 
    (index+1)*200);

    elem.onclick = function  soundAndInfo(){
      if (elem.classList.contains(`vehicle-box${index+1}`)) {
        menu1.style.animation = 'menu-change1 0.3s forwards'
        VehicleFetch(index)
        playSound(vehicleSound, index)
      }
    }       
})
popup.classList.remove('active')
overlay.classList.remove('active')
}

  fruitsButton.addEventListener('click',  fruitsTimeOut )
  function fruitsTimeOut() {
    footerSpan.innerText = `${TextC}`
    document.querySelector(".btn").innerText = "Switch"
    contentBox.forEach((elem, index)=>{
    
      // Boxes Appearing one by one not all at one time
        setTimeout(() => {
            mobileScrolladdBtn(elem)
            let fruitCategory = new CategoryChange("fruits-box", index, elem, "fruit", "fruits1")
            fruitCategory.categoryChange()
          }, 
          (index+1)*200);
            
          elem.onclick = function  soundAndInfo(){
            if (elem.classList.contains(`fruits-box${index+1}`)) {
              menu1.style.animation = 'menu-change2 0.3s forwards'
              FruitsFetch(index)
              playSound(fruitSound, index)
            }
          }       
      })
      popup.classList.remove('active')
    overlay.classList.remove('active')
  }
  

