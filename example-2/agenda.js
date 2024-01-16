// recuperiamo i dati dal form e creiamo dinamicamente le card in basso
const nameInput = document.getElementById('event-name')
const dateInput = document.getElementById('event-date')
// const saveButton = document.getElementById('save')
const eventForm = document.getElementsByTagName('form')[0]
const eventsRow = document.getElementsByClassName('row')[1]

let events = []

// creiamo una classe per generare oggetti di tipo CalendarEvent tutti omogenei tra di loro
class CalendarEvent {
  constructor(_name, _date) {
    this.eventName = _name
    this.eventDate = _date
  }
}

const emptyForm = function () {
  // svuoto il form
  nameInput.value = ''
  dateInput.value = ''
}

const emptyEventsRow = function () {
  // svuoto la row degli eventi
  eventsRow.innerHTML = ''
}

const generateEventCards = function () {
  // qui dentro io selezionerò la row e ciclerò l'array events, generando per ogni elemento contenuto
  // una col che appenderò alla row

  emptyEventsRow()

  events.forEach((ev, i) => {
    // cosa faccio per ogni ev?
    const newCol = document.createElement('div')
    newCol.classList.add('col')
    newCol.innerHTML = `
    <div class="card">
        <div class="card-header">Evento</div>
        <div class="card-body">
            <h5 class="card-title">${ev.eventName}</h5>
            <p class="card-text">
                ${ev.eventDate}
            </p>
            <button class="btn btn-danger" onclick="removeCardFromDOM(event, ${i})">ELIMINA</button>
        </div>
    </div>
    `
    eventsRow.appendChild(newCol)
    emptyForm()
  })
}

const removeCardFromDOM = function (event, i) {
  // questo elimina la card dal DOM
  event.target.closest('.col').remove()
  // però devo anche aggiornare il localStorage
  // devo trovare l'elemento da eliminare nell'array e ri-salvarlo nel localStorage
  // recupero la stringa che rappresenta gli eventi dal localStorage
  const eventsAsString = localStorage.getItem('events')
  const arrayOfExistingEvents = JSON.parse(eventsAsString)
  // ora devo eliminare da arrayOfExistingEvents l'elemento con indice i
  arrayOfExistingEvents.splice(i, 1)
  localStorage.setItem('events', JSON.stringify(arrayOfExistingEvents))
  // perchè ricordiamo! il localStorage e il sessionStorage salvano SOLAMENTE STRINGHE
  // d'altro canto però, per usare i metodi degli array come .splice() dovete trasformare la stringa nuovamente in array
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

  // ora che ho aggiornato il mio array events con l'ultimo elemento arrivato, proviamo a salvare/sovrascrivere
  // il contenuto del localStorage
  // PROBLEMA! events è di tipo CalendarEvent[] (un array di oggetti di tipo CalendarEvent)
  // quindi non una stringa :(
  // SOLUZIONE: per salvarlo nel localStorage, dobbiamo prima "STRINGHIFIZZARLO"
  // questo è un lavoro per un metodo di un oggetto integrato in javascript che si chiama JSON
  localStorage.setItem('events', JSON.stringify(events)) // salviamo events trasformato in una stringa

  // ora che ho riempito events con l'ultimo evento aggiunto, lo ciclo e creo una card per ogni evento salvato
  generateEventCards()
})

// CHECK ALL'AVVIO DELLA PAGINA:
// controlliamo se nel localStorage c'è una key che si chiama "events"
// se questo è il caso, significa che non è la prima volta che apriamo l'applicazione, ma che avevamo
// in precedenza già creato degli eventi!
// cosa dovrà fare l'app?
// 1) events non partirà da array vuoto, ma gli eventi attualmente esistenti prenderanno il suo posto
// 2) dobbiamo invocare la funzione generateEventCards() in modo da generare delle card per gli eventi
// già creati in precedenza

if (localStorage.getItem('events')) {
  // 0) recuperiamo gli events nel localStorage, e ri-trasformiamo in un array di oggetti
  const eventsAsString = localStorage.getItem('events')
  const arrayOfExistingEvents = JSON.parse(eventsAsString) // ho di nuovo ottenuto un CalendarEvent[]
  // 1)
  events = arrayOfExistingEvents // funziona solo se events è una let!
  // 2)
  generateEventCards()
}
