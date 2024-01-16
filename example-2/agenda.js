// recuperiamo i dati dal form e creiamo dinamicamente le card in basso
const nameInput = document.getElementById('event-name')
const dateInput = document.getElementById('event-date')
// const saveButton = document.getElementById('save')
const eventForm = document.getElementsByTagName('form')[0]

const events = []

// creiamo una classe per generare oggetti di tipo CalendarEvent tutti omogenei tra di loro
class CalendarEvent {
  constructor(_name, _date) {
    this.eventName = _name
    this.eventDate = _date
  }
}

const generateEventCards = function () {
  // qui dentro io selezionerò la row e ciclerò l'array events, generando per ogni elemento contenuto
  // una col che appenderò alla row
}

// lavoriamo con il form: intercettiamo il suo evento di submit
// const eventForm = document.querySelector('form')
eventForm.addEventListener('submit', function (e) {
  e.preventDefault()
  // recuperiamo i dati del form e generiamo un oggetto di tipo CalendarEvent
  const eventFromForm = new CalendarEvent(nameInput.value, dateInput.value)
  console.log(eventFromForm)

  // secondo me ora è il caso di pushare eventFromForm dentro un array, che inizializzeremo a inizio file come []
  events.push(eventFromForm)
  // ora che ho riempito events con l'ultimo evento aggiunto, lo ciclo e creo una card per ogni evento salvato
  generateEventCards()
})
