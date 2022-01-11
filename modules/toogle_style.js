//style change while selecting category

const container = document.querySelectorAll(".item");
const contain = document.querySelector(".container");
const mobileButton = document.querySelector(".nav-box-3");

export class CategoryChange {
  constructor(names, index, elem, category, bgImage) {
    this.names = names;
    this.index = index;
    this.elem = elem;
    this.category = category;
    this.bgImage = bgImage;
  }
  categoryChange() {
    mobileButton.style.pointerEvents = "none";
    this.elem.style.animation = "opacity 0.5s linear";
    //Removing styles and add style of clicked category
    this.elem.classList.remove(`vehicle-box${this.index + 1}`);
    this.elem.classList.remove(`fruits-box${this.index + 1}`);
    this.elem.classList.remove(`animals-box${this.index + 1}`);
    this.elem.classList.remove("cnt-img");
    this.elem.classList.add(`${this.names}${this.index + 1}`);
    container.forEach((elem) => {
      elem.style.animation = "to-transparent1 0.3s linear forwards alternate";
      contain.style.backgroundImage = `url('./img/${this.bgImage}.jpg')`;
      menu1.style.display = "block";
      menu1.innerHTML = "";
      document.querySelector(
        ".nav-box-3"
      ).innerText = `Select an ${this.category} to hear it and display facts `;
    });
  }
}
