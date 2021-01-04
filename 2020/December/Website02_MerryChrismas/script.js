const celebrate = document.querySelector(".celebrate")

// I wanted to make the text be able to have a function that makes the odds red and evens green, and for later to make them alternate 

function chrismasTextColors() {
    celebrate.innerHTML = celebrate.innerText
    .split("")
    
    .map((letter, idx) => `<span>${letter}</span>`)
    .join("")    
}



chrismasTextColors()
console.log(celebrate.innerHTML)

// [DISCARD ATTEMPTS]
// function getEvenNumbers() {
//     var arr = [1, 2, 3, 4, 5, 6];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             document.writeln(arr[i] + "<br />");
//         }
//     }
// }