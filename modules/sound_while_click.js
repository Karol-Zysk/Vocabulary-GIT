// Click play sound / click pause current sound and play next sound
// Array that helps pausing track before new is playing
let audioArr = [3,0]

export function playSound(name, index) {
  

  audioArr.push(index)
  audioArr.shift()
  
  let myValue = audioArr[`${audioArr.length-2}`]
  name[myValue].pause();
  name[myValue].currentTime = 0  
  name[index].play()
}