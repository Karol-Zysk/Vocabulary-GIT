import { AnimalFetch } from "./modules/fetch_functions";

let animalCategory = new CategoryChange("animals-box", index, elem, "animal", "jungle")

class LayoutChange {
    constructor (text, category, box, fetch, sound, n ){
        this.text = text;
        this.category = category;
        this.box = box;
        this.fetch = fetch;
        this.sound = sound;
        this.n = n;
    }
    
        ClassChange() {
            footerSpan.innerText = `${text}`
            document.querySelector(".btn").innerText = "Switch"
          contentBox.forEach((elem, index)=>{
          
            // Boxes Appearing one by one not all at one time
              setTimeout(() => {
                  mobileScrolladdBtn(elem)
        
                  this.category.categoryChange()
                }, 
                (index+1)*200);
          
                elem.onclick = function  soundAndInfo(){
                  if (elem.classList.contains(`${this.box}${index+1}`)) {
                    menu1.style.animation = 'menu-change 0.3s forwards'
                    this.fetch(index)
                    playSound(this.sound, index)
                  }
                }       
            })
            popup.classList.remove('active')
          overlay.classList.remove('active')
          
    }
}




  let animalClass = new LayoutChange (TextA ,animalCategory, "animals-box", AnimalFetch, AnimalSound, "" )

  animalClass.ClassChange()