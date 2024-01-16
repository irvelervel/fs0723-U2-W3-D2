// prendo i riferimenti necessari dal DOM
// textarea
const textarea = document.getElementById('notepad-textarea')
// 3 bottoni
const saveButton = document.getElementsByClassName('btn-success')[0] // [{bottonesalva}] -> {bottonesalva}
const loadButton = document.getElementsByClassName('btn-info')[0]
const resetButton = document.getElementsByClassName('btn-warning')[0]

saveButton.addEventListener('click', function () {
  console.log('cliccato salva!')
  // recupero il contenuto testuale della textarea
  const content = textarea.value
  console.log('content', content)
  // salvo il content con il nome notepad-memory in sessionStorage
  sessionStorage.setItem('notepad-memory', content)
  alert('contenuto salvato!')
})

loadButton.addEventListener('click', function () {
  console.log('cliccato carica!')
  // recupero il valore della chiave notepad-memory dal sessionStorage
  const savedContent = sessionStorage.getItem('notepad-memory')
  // sostituisco l'attuale contenuto della textarea con il valore prelevato
  if (savedContent) {
    textarea.value = savedContent
  } else {
    alert('nessun contenuto in memoria')
  }
})

resetButton.addEventListener('click', function () {
  console.log('cliccato reset!')
  // resettare il contenuto della textarea
  textarea.value = ''
  // elimino l'eventuale notepad-memory salvata in sessionStorage
  sessionStorage.removeItem('notepad-memory')
  // approccio NUKE (pialla TUTTO il contenuto attuale del sessionStorage)
  // sessionStorage.clear()
  alert('memoria eliminata!')
})
