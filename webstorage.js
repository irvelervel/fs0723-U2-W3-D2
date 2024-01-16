// Le API di WEB STORAGE nascono con la standardizzazione di HTML5, alla fine di migliorare una tecnologia esistente (cookie).
// Queste API migliorano i cookie superando le loro 2 principali limitazioni:
// 1) I cookie possono memorizzare al massimo 4KB di dati
// 2) I cookie non erano stati pensati per memorizzare dati a livello di "sessione"

// La soluzione è stata introdurre due nuove tecnologie (API) per lo stoccaggio dati lato client (browser) a breve/medio termine.
// 1) localStorage (che memorizza dati fino al proprio svuotamento)
// 2) sessionStorage (che memorizza dati solamente per la "sessione" corrente, quindi si auto-svuota alla chiusura del tab/browser)

// Entrambe queste tecnologie di memorizzazione condividono uno spazio totale di circa 5MB e memorizzano informazioni separate
// a livello di dominio

// nonostante queste memorie siano effettivamente spazi SEPARATI, i metodi per interagire con queste memorie sono gli stessi:
// - setItem(chiave, valore) -> per salvare un dato
// - getItem(chiave) -> per recuperare un valore
// - removeItem(chiave) -> per rimuovere una coppia chiave/valore
// - clear() -> per azzerare lo storage su quel dominio

// N.B: ricordati di NON salvare dati particolarmente sensibili in questi motori di storage perchè sono completamente esposti
// all'utente

// qualche prova:
// localStorage.clear() // azzera la memoria

localStorage.setItem('michela', 'student')
// localStorage.removeItem('michela')

console.log(localStorage.getItem('michela'))

// nota finale: ricordati che in localStorage e in sessionStorage puoi salvare SOLAMENTE STRINGHE!
