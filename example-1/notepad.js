// prendo i riferimenti necessari dal DOM
// textarea
const textarea = document.getElementById('notepad-textarea')
// 3 bottoni
const saveButton = document.getElementsByClassName('btn-success')[0] // [{bottonesalva}] -> {bottonesalva}
const loadButton = document.getElementsByClassName('btn-info')[0]
const resetButton = document.getElementsByClassName('btn-warning')[0]

saveButton.addEventListener('click', function () {
  console.log('cliccato salva!')
})

loadButton.addEventListener('click', function () {
  console.log('cliccato carica!')
})

resetButton.addEventListener('click', function () {
  console.log('cliccato reset!')
})
