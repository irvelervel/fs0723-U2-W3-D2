// Le API di WEB STORAGE nascono con la standardizzazione di HTML5, alla fine di migliorare una tecnologia esistente (cookie).
// Queste API migliorano i cookie superando le loro 2 principali limitazioni:
// 1) I cookie possono memorizzare al massimo 4KB di dati
// 2) I cookie non erano stati pensati per memorizzare dati a livello di "sessione"

// La soluzione è stata introdurre due nuove tecnologie (API) per lo stoccaggio dati lato client (browser) a breve/medio termine.
// 1) localStorage (che memorizza dati fino al proprio svuotamento)
// 2) sessionStorage (che memorizza dati solamente per la "sessione" corrente, quindi si auto-svuota alla chiusura del tab/browser)

// Entrambe queste tecnologie di memorizzazione condividono uno spazio totale di circa 5MB e memorizzano informazioni separate
// a livello di dominio
