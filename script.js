// Targetting my HTMLDOM
const btn = document.getElementById('Convert')
const naira = document.getElementById('naira')

// Adding an eventListener to the convert button
btn.addEventListener('click', () => {
  let nairaValue = naira.value
  let dollarValue = nairaValue / 415.8856
  let euroValue = nairaValue / 458.85839
  let yenValue = nairaValue / 3.4989
  let poundValue = nairaValue / 542.5775
  let swissValue = nairaValue / 446.217
  let dollarApprox = dollarValue.toFixed(2)
  let euroApprox = euroValue.toFixed(2)
  let yenApprox = yenValue.toFixed(2)
  let poundApprox = poundValue.toFixed(2)
  let swissApprox = swissValue.toFixed(2)
  document.getElementById('dollar').value = dollarApprox
  document.getElementById('euro').value = euroApprox
  document.getElementById('yen').value = yenApprox
  document.getElementById('pound').value = poundApprox
  document.getElementById('swiss').value = swissApprox
})

// Targetting my Reset Button
const reset = document.getElementById('clear')

// Adding an eventListener to clear the input space
reset.addEventListener('click', () => {
  naira.value = ''
  dollar.value = ''
  euro.value = ''
  yen.value = ''
  pound.value = ''
  swiss.value = ''
})
