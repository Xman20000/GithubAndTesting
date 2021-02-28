const button = document.getElementById("button")
const counter = document.getElementById("counter")
let secretCount = 0

button.addEventListener("click", () => {
if (secretCount < 5) {
  secretCount++
  counter.innerHTML = `<span>Can you find them? ${secretCount}/5</span>`
} else if (secretCount == 5) {
  break
}
  console.log(secretCount)
})

// let int = setInterval(blurring, 30)

// function blurring() {
//     load++
  
//     if (load > 99) {
//       clearInterval(int)
//     }
  
//     loadText.innerText = `${load}%`
//     loadText.style.opacity = scale(load, 0, 100, 1, 0)
//     bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
//   }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }