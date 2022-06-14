// array with colors
const colors = [
  'red',
  'blue',
  'rgb(255, 123, 245)',
  '#f38721',
  'rgba(234,122,121, 0.6)',
]

// dom elements
let btn = document.getElementById('btn')
let color = document.querySelector('#color-val')

btn.addEventListener('click', function () {
  let randomNumber = getRandomNumber()

  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

//random number
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
