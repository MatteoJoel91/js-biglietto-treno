// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Doamanda età
let eta = parseInt(prompt('Inserire l\'età del viaggiatore.\nGrazie'));
console.log(eta);

// Doamanda kilometri
let km = parseInt(prompt('Inserire la distanza da viaggiare in km.\nGrazie'));
console.log(km);

// Prezzo per kilometro
const prezzoKm = 0.21;
console.log(prezzoKm);

// Prezzo biglietto calcolato senza sconti
let prezzoBiglietto = km * prezzoKm;
console.log(prezzoBiglietto);

// sconto del 20% per minorenni
let sconto20 = (prezzoBiglietto * 20 / 100);

// sconto del 40% per over 65
let sconto40 = (prezzoBiglietto * 40 / 100);



if(eta < 18){
    let prezzoFinale = prezzoBiglietto - sconto20;
    document.getElementById('Prezzo_biglietto_finale').innerHTML = prezzoFinale;
}
else if (eta >65){
    let prezzoFinale = prezzoBiglietto - sconto40;
    document.getElementById('Prezzo_biglietto_finale').innerHTML = prezzoFinale;
}
else{
    document.getElementById('Prezzo_biglietto_finale').innerHTML = prezzoBiglietto;
}