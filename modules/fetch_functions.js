 //Fetching info from Json Files to menu
 export function AnimalFetch(index) {
    
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
  }

  export function VehicleFetch(index){
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
  }
  

  export function FruitsFetch(index){
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
  }