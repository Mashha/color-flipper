const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

//call the dom elements

const btn = document.getElementById('btn')
const colors = document.getElementById('color-val')

// add event listener
btn.addEventListener('click', function () {
  // hex values have # in front
  hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumbers()]
  }

  document.body.style.backgroundColor = hexColor
  colors.textContent = hexColor
})

// random function
function getRandomNumbers() {
  return Math.floor(Math.random() * hex.length)
}
