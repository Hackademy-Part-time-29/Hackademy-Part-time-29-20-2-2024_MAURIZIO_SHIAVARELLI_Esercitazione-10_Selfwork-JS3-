// esercizio 1
// Crea due variabili, una che contiene il numero totale dei gatti e una che contiene il numero dei gatti in fila. Scrivi quindi un programma che calcoli: 

// Il numero di file risultanti 
// il numero di gatti mancanti per completare una nuova fila
// quanti gatti rimangono fuori
// In seguito, stampa in console la frase “Ci sono X file di gatti e ne mancano Y per una nuova fila, con un avanzo di Z”


// let numeroTotGatti = parseInt(prompt("inserisci un dividendo che indica il numero totale degli elementi"));
// let numeroGattiInFila = parseInt(prompt("inserisci un divisore che indica da quanto deve essere composta la fila"));

// let fileTotali = numeroTotGatti / numeroGattiInFila;

// //numero file risultanti totali = 15 ( 44 / 3 arrotondato per eccesso)------------------------------------------
// let numeroFileEccesso = (Math.ceil(fileTotali));
// console.log("Numero di file arrotondato per eccesso = " + numeroFileEccesso);

// //numero di gatti mancanti per completare una fila ( numero file in eccesso * 3 - 44)---------------------------
// let gattiPerNuovaFila = ((numeroFileEccesso * numeroGattiInFila) - numeroTotGatti);
// console.log("Numero di elementi mancanti per completare una fila = " + gattiPerNuovaFila);



// //numero di gatti che restano fuori la fila = 2 ( resto di due con modulo );-------------------------------------
// let gattiMancantiPerNuovaFila = numeroTotGatti % numeroGattiInFila;
// console.log("Numero di elementi che restano fuori le file complete = " + gattiMancantiPerNuovaFila);



















//esercizio 2

// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

// se v e’ minore di 18,  stampare in console  “insufficiente”
// se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// se v e’ uguale a 30, stampare in console:  “eccellente”
// Esempio:
// let v = 29;
// Output: Ottimo
// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch.





// else/if

// let voto = parseInt(prompt("inserisci voto"));

// if(voto < 18){
//     console.log("insufficente")
// }else if (voto >=18 &&  voto < 21 ){
//     console.log("sufficente")
// }else if ( voto >=21 && voto < 24){
//     console.log("buono")
// }else if(voto >=24 && voto < 27){
//     console.log("distinto")
// }else if(voto >=27 && voto < 29){
//     console.log("ottimo")
// }else if(voto == 30){
//     console.log("eccellente")
// }else if (voto > 30){
//     console.log("voto inesistente")
// };



// switch

// let votoSwitch = parseInt(prompt("inserisci voto"));

// switch (true){
//     case( votoSwitch < 18 ):
//     console.log("insufficente");
//     break;
    
//     case(votoSwitch >=18 &&  votoSwitch < 21):
//     console.log("sufficente");
//     break;

//     case(votoSwitch >=21 && votoSwitch < 24):
//     console.log("buono");
//     break;

//     case(votoSwitch >=24 && votoSwitch < 27):
//     console.log("distinto");
//     break;

//     case(votoSwitch >=27 && votoSwitch < 29):
//     console.log("ottimo");
//     break;

//     case(votoSwitch == 30):
//     console.log("eccellente");
//     break;

//     default:
//         console.log("voto inesistente");

// };

















































// esercizio 3

// Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:

// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
// Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case.



// else if

// let temperatura = parseInt(prompt("inserisci temperatura"))

// if (temperatura >1 && temperatura <= 20){
//     console.log("non ci sono piu le mezze stagioni");
// }else if(temperatura >= 30){
//     console.log("ci fsc call");
// }else if(temperatura >-9 && temperatura < 0){
//     console.log("non é tanto il freddo quanto l'umidita");
// }else if(temperatura < -10){
//     console.log("copriti angor t pigj na jocc");
// }else if(temperatura > 21 && temperatura < 30){
//     console.log("no so come vestirmi")
// };







// switch case

let temperatura = parseInt(prompt("inserisci temperatura"))

switch(true){
    
    case( temperatura >=1 && temperatura <= 20 ):
    console.log("d'estate si sta bene, ma l'inverno fa freddo");
    break;

    case( temperatura >= 30 && temperatura < 40 ):
    console.log("fsc nu call");
    break;

    case( temperatura >=-9 && temperatura < 0 ):
    console.log("non é tanto il freddo quanto l'umidita");
    break;

    case(temperatura <= -10):
    console.log("copriti angor t pigj na jocc");
    break;

    case(temperatura > 21 && temperatura < 30):
    console.log("non so cosa mettermi");
    break;

    default:
    console.log( "wallio, attento a quello che scrivi");
}





// case( votoSwitch < 18 ):
// //     console.log("insufficente");
// //     break;