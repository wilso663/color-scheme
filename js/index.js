const colorBtn = document.querySelector('.color-button')
const colorPicker = document.querySelector('#color-picker')
const schemeSelect = document.querySelector('#scheme-selector')
const colorCodes = document.querySelectorAll('.code')
const colorDisplays = document.querySelectorAll('.color')
const snackbar = document.querySelector('#snackbar')

let colorList = ['#f55a5a', '#2b283a', "#f8f3ab", "#aad18c", "#a525d3"]

function getColor() {
  console.log(schemeSelect.value)
}

function getSchemeColors() {
  const baseURL = "https://www.thecolorapi.com/scheme?"
  const hex = `hex=${colorPicker.value.slice(1)}`
  const scheme = `mode=${schemeSelect.value}`
  const count = "count=5"
  let url = baseURL + hex + "&" + scheme.toLowerCase() + "&" + count
  fetch(url)
    .then(response => response.json())
    .then(data => updateColors(data.colors))
}

//Helper function to update colors with array gotten from getSchemeColors
//Parameter: colorList, needs to be a string array of 6 digit hex codes, ex. #FFF000
function updateColors(colorList) {
  let index = 0
  colorCodes.forEach((node) => {
    let color = colorList[index].hex.value;
    node.innerHTML = `${color}`
    colorDisplays[index].style['background-color'] = color
    index++
  })
}

function initColors(){
  let index = 0;
  colorCodes.forEach((item) => {
    let color = colorList[index]
    item.innerHTML = `${color}`
    colorDisplays[index].style['background-color'] = color
    index++
  })
}

function rgb2hex(rgb) { 
  return `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
}

function showNotification() {
  snackbar.className = "show"
  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "")
  }, 2000)
}

function initClipboardListeners(){
  for(let i = 0; i < colorDisplays.length; i++){
    colorDisplays[i].addEventListener('click', (event)=> {
      navigator.clipboard.writeText(rgb2hex(event.target.style['background-color']))
      showNotification()
    })
    colorCodes[i].addEventListener('click', (event) => {
      navigator.clipboard.writeText(event.target.innerHTML)
      showNotification()
    })
  }
}

initColors()
initClipboardListeners()
colorBtn.addEventListener('click', getSchemeColors)