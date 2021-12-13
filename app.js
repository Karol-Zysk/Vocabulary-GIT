const container = document.querySelectorAll('.item')
const contain = document.querySelector('.container')
const navBox = document.getElementsByClassName('navbar')
const headerBox = document.querySelectorAll('.header-box')
const header = document.querySelectorAll('.header')
const contentBox = document.querySelectorAll('.cnt-bx')
const addClassBtn = document.getElementById('add-class-btn')
const openpopupButtons = document.querySelector('.switch-btn')
const closepopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const animalsButton = document.querySelector('.pop-box1')
const vehicleButton = document.querySelector('.pop-box2')
const fruitsButton = document.querySelector('.pop-box3')
const animalSound = document.querySelectorAll('.animalSound')
const vehicleSound = document.querySelectorAll('.vehicleSound')
const fruitSound = document.querySelectorAll('.fruitSound')
const menu1 = document.getElementById('menu1')
const menu = document.querySelector('.menu')
const content = document.querySelector('.content')
const cntImg = document.querySelectorAll('.cnt-img')
const headerTxt = document.querySelectorAll('.header-txt')
const footerSpan = document.querySelector('.footerSpan')
const mobileButton = document.querySelector('.nav-box-3')
const compButton = document.querySelector('.nav-box-2')
const swBtn = document.querySelector('.mobile-sw-btn')



console.log(headerTxt)
if (compButton.style.display === "none") {
} else {
}

if (window.matchMedia("(max-width: 500px)").matches) {

  mobileButton.addEventListener('click', () => {
  openpopup(popup)
  })
} else {

  compButton.addEventListener('click', () => {

    openpopup(popup)
  })
}



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



container.forEach((elem, index) => {

    elem.style.animationName = 'to-grey'
    elem.style.animationDuration = '0.5s'
    elem.style.animationIterationCount = '1'
    elem.style.animationDirection = 'alternate'
    elem.style.animationDelay = `${(index/3) +0.3}s`
    elem.style.animationTimingFunction = 'linear'
    elem.style.animationFillMode = 'forwards'
    // console.log(arrContainer+'to element')
});


headerBox.forEach((elem , index) => {
    
    elem.style.animationName = 'Animals-animation'
    elem.style.animationDuration = '1s'
    elem.style.animationIterationCount = 'infinite'
    elem.style.animationDirection = 'alternate'
    elem.style.animationDelay = `${(index/10)+0.1}s`
    elem.style.animationTimingFunction = 'ease-in'
    
});

let values = [3,0]


  animalsButton.addEventListener('click',  animalTimeOut )
 

function animalTimeOut() {
  footerSpan.innerText = "The expert in anything was once a begginer."
document.querySelector(".header").style.backgroundImage = 'red'
document.querySelector(".btn").innerText = "Switch"
contentBox.forEach((elem, index)=>{
    setTimeout(() => {
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
      mobileButton.style.pointerEvents ="none"
        elem.style.animationName = 'opacity'
        elem.style.animationDuration = '0.5s'
        elem.style.animationTimingFunction = 'linear'
        elem.classList.remove(`vehicle-box${index+1}`)
        elem.classList.remove(`fruits-box${index+1}`)
        elem.classList.remove('cnt-img')
        elem.classList.add(`animals-box${index+1}`)
        container.forEach(elem => {
          // counter = counter + 0.5
          elem.style.animationName = 'to-transparent1'
          elem.style.animationDuration = '0.3s'
          // elem.style.animationIterationCount = '1'
          // elem.style.animationDirection = 'alternate'
          elem.style.animationDelay = '0s'
          elem.style.animationTimingFunction = 'linear'
          contain.style.backgroundImage = "url('./img/jungle.jpg')"
          menu1.style.display = "block"
          
          menu1.innerHTML = ''
          document.querySelector('.nav-box-3').innerText = "Select an animal to hear it and display facts "

          
        });
        
      elem.onclick = function  playSound(){
        if (elem.classList.contains(`animals-box${index+1}`)) {
          menu1.style.animationName = 'menu-change'
          menu1.style.animationDuration = '0.5s'
          menu1.style.animationFillMode = 'forwards'
          menu1.style.animationIterationCount ='1'     

          
          fetch('./animals.json')
.then(function  (response) {
  return response.json();
})
.then(function (animals){
  menu1.innerHTML =       `   <h2>${animals[index].animalTipe}</h2>
  <hr size="5px" color="white">
  <br>
  <p class="paragraph"><span class="vspan">Name:</span> ${animals[index].animalName}</p>
  <p class="paragraph"><span class="vspan">Max age</span>: ${animals[index].animalAge}</p>
  <p class="paragraph"><span class="vspan">Place:</span> ${animals[index].animalPlace}</p>
  <p class="paragraph"><span class="vspan">Sound:</span> ${animals[index].animalSound}</p><br>
  <span class="vspan">Fun Fact:</span><br><hr size=3px color = white><p class="fact-paragraph"> ${animals[index].animalFact}</p>`
})


      values.push(index)
      values.shift()
      let myValue = values[`${values.length-2}`]
      // value = 
      animalSound[myValue].pause();
      animalSound[myValue].currentTime = 0  
      animalSound[index].play()
      console.log(values)
      console.log(myValue)
        }
      }   
           }, 
    (index+1)*200);})
    
  popup.classList.remove('active')
  overlay.classList.remove('active')
}

vehicleButton.addEventListener('click',  vehicleTimeOut )
function vehicleTimeOut() {
footerSpan.innerText = "Never stop learning, becouse life never stops teaching."
document.querySelector(".btn").innerText = "Switch"
contentBox.forEach((elem, index)=>{
    setTimeout(() => {
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
      elem.style.animationName = 'opacity1'
      elem.style.animationDuration = '0.5s'
      elem.style.animationTimingFunction = 'linear'
        elem.classList.remove(`animals-box${index+1}`)
        elem.classList.remove(`fruits-box${index+1}`)
        elem.classList.remove('cnt-img')
        elem.classList.add(`vehicle-box${index+1}`)
        container.forEach(elem => {
          // counter = counter + 0.5
          elem.style.animationName = 'to-transparent2'
          elem.style.animationDuration = '0.3s'
          elem.style.animationIterationCount = '1'
          elem.style.animationDirection = 'alternate'
          elem.style.animationDelay = '0s'
          elem.style.animationTimingFunction = 'linear'
          elem.style.animationFillMode = 'forwards'
          contain.style.backgroundImage = "url('./img/road.jpg')"
          menu1.innerHTML = ''
          menu1.style.display = "block"
          document.querySelector('.nav-box-3').innerText = "Select a vehicle to hear it and display facts"

          
        });
        elem.onclick = function  playSound(){
          if (elem.classList.contains(`vehicle-box${index+1}`)) {
            menu1.style.animationName = 'menu-change1'
            menu1.style.animationDuration = '0.5s'
            menu1.style.animationTimingFunction = 'linear'
            menu1.style.animationFillMode = 'forwards'
            menu1.style.animationIterationCount ='1'    
            
            
            fetch('./vehicle.json')
            .then(function  (response) {
              return response.json();
            })
            .then(function (vehicle){
              menu1.innerHTML =       `   <h2>${vehicle[index].vechicleName}</h2>
              <hr size="5px" color="white">
              <br>
              
              <p class="paragraph"><span class="vspan">Invention:</span>   ${vehicle[index].invention}</p>
              <p class="paragraph"><span class="vspan">Max Speed:</span>   ${vehicle[index].maxSpeed}</p>
              <br>
             <span class="vspan">Fact:</span><br><hr size="3px" color="white"><p class="fact-paragraph">  ${vehicle[index].vehicleFact}</p>`
            })
  
        values.push(index)
        values.shift()
        let myValue = values[`${values.length-2}`]
        // value = 
        vehicleSound[myValue].pause();
        vehicleSound[myValue].currentTime = 0  
        vehicleSound[index].play()
        console.log(values)
        console.log(myValue)
          }
        } 
      },
    (index+1)*200);
  })
  popup.classList.remove('active')
  overlay.classList.remove('active') 

}


fruitsButton.addEventListener('click',  fruitsTimeOut )
function fruitsTimeOut() {
  footerSpan.innerText = "Learning how to learn is life's most important skill."

  
document.querySelector(".btn").innerText = "Switch"
contentBox.forEach((elem, index)=>{
    setTimeout(() => {
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
      elem.style.animationName = 'opacity2'
      elem.style.animationDuration = '0.5s'
      elem.style.animationTimingFunction = 'linear'
        elem.classList.remove(`animals-box${index+1}`)
       elem.classList.remove(`vehicle-box${index+1}`)
       elem.classList.remove('cnt-img')
        elem.classList.add(`fruits-box${index+1}`)
        container.forEach(elem => {
          // counter = counter + 0.5
          elem.style.animationName = 'to-transparent3'
          elem.style.animationDuration = '0.3s'
          elem.style.animationIterationCount = '1'
          elem.style.animationDirection = 'alternate'
          elem.style.animationDelay = '0s'
          elem.style.animationTimingFunction = 'linear'
          elem.style.animationFillMode = 'forwards'
          contain.style.backgroundImage = "url('./img/fruits1.jpg')"
          menu1.innerHTML = ''
          menu1.style.display = "block"
          document.querySelector('.nav-box-3').innerHTML = "Chose Fruit to display facts"

        });
        
        elem.onclick = function  playSound(){
        if (elem.classList.contains(`fruits-box${index+1}`)) {
          menu1.style.animationName = 'menu-change2'
          menu1.style.animationDuration = '0.5s'
          menu1.style.animationFillMode = 'forwards'
          menu1.style.animationIterationCount ='1'   
          
          fetch('./fruits.json')
          .then(function  (response) {
            return response.json();
          })
          .then(function (fruits){
            menu1.innerHTML =       `   <h2>${fruits[index].fruitName}</h2><br>
            <hr size="5px" color="white">
            <br>
            
            <p class="paragraph"><span class="vspan">Color:</span>   ${fruits[index].color}</p>
            <p class="paragraph"><span class="vspan">Year of domestication:</span>   ${fruits[index].Since}</p>
            <br>
            <span class="vspan">Fact:</span><br><hr size = 3px color= white> <p class="fact-paragraph"> ${fruits[index].fruitFact}</p>`
           
          })

            
          values.push(index)
          values.shift()
          let myValue = values[`${values.length-2}`]
          // value = 
          fruitSound[myValue].pause();
          fruitSound[myValue].currentTime = 0  
          fruitSound[index].play()
          console.log(values)
          console.log(myValue)
        }
      }
      },
    (index+1)*200);
  })
  
  popup.classList.remove('active')
  overlay.classList.remove('active')
}