/*
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/

const eleDays = document.querySelector('.days');
const eleHours = document.querySelector('.hours');
const eleMinuetes = document.querySelector('.minutes');
const eleSeconds = document.querySelector('.seconds');

const endCounter = new Date('2023-04-28T15:08:00').getTime();

const idInterval = setInterval(count, 1000);
count();


/* FUNCTION DEFINITIONS */
function count() {
	const now = new Date().getTime();
	const delta = Math.floor((endCounter - now) / 1000); // in seconds
	const dateDelta = new Date(delta * 1000);

	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	// capire se siamo arrivati alla fine del contatore
	if (delta <= 0) {
		clearInterval(idInterval);
	} else {
		// calcolare giorni mancanti
		// days = dateDelta.getDate() - 1;
		days = Math.floor(delta / (24 * 60 * 60));
		// calcolare ore mancanti
		// hours = dateDelta.getHours();
		hours = Math.floor((delta % (24 * 60 * 60)) / (60 * 60))
		// calcolare minuti mancanti
		// minutes = dateDelta.getMinutes();
		minutes = Math.floor((delta - days * (24 * 60 * 60) - hours * (60 * 60)) / 60);
		// calcolare secondi mancanti
		// seconds = dateDelta.getSeconds();
		seconds = delta - days * (24 * 60 * 60) - hours * (60 * 60) - minutes * 60;
	}

	// aggiornare l'interfaccia
	eleDays.innerHTML = days;
	eleHours.innerHTML = hours;
	eleMinuetes.innerHTML = minutes;
	eleSeconds.innerHTML = seconds;
}
