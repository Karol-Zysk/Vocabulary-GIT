import { animaton } from "./modules/animations.js";
import { AnimalFetch } from "./modules/fetch_functions.js"
import { VehicleFetch } from "./modules/fetch_functions.js";
import { FruitsFetch } from "./modules/fetch_functions.js";
import { modals } from "./modules/modal_functions.js";
import { CategoryChange } from "./modules/toogle_style.js";
import { mobileScrolladdBtn } from "./modules/mobile_scroll.js";
import { playSound } from "./modules/sound_while_click.js";


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


// Launch functions responsible for showing/hiding popup
modals()

// Header letters Animation
animaton()

//ScrollingTo menu on mobiles
mobileScrolladdBtn()


//Boxes conected to sounds


//Adding scroll function and new switch category button to mobile version

//Footer Texts
const TextA = "The expert in anything was once a begginer."
const TextB = "Never stop learning, becouse life never stops teaching."
const TextC = "Learning how to learn is life's most important skill."

//--------------------Functions for changing categories : Animal / Vehicles / Fruits

function animalClassChange() {
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

animalsButton.addEventListener('click',  animalClassChange )



//----------------------------------------------

  function vehicleClassChange() {
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

vehicleButton.addEventListener('click',  vehicleClassChange )


//-------------------------------------------



  function fruitsClassChange() {
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

  fruitsButton.addEventListener('click',  fruitsClassChange )

