var dadoComputer = Math.floor(Math.random()*6);
var dadoGiocatore = Math.floor(Math.random()*6);
console.log(dadoComputer);
console.log(dadoGiocatore);

if(dadoComputer > dadoGiocatore) {
    console.log("Hai perso. :(");
}

else if (dadoComputer < dadoGiocatore) {
    console.log("Hai vinto! :)");
}

else {
    console.log("Pareggio! :|");
}