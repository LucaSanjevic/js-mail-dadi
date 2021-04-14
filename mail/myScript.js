var gruppoMail = ["Joseph@gmail.com","Abdul@hotmail.it","Polnareff@gmail.it","Kakyoin@hotmail.com","Jotaro@live.it","Iggy@live.com"];
var emailUtente = prompt("Inserisci la tua e-mail");
var presente = false;

for (var i = 0; i < gruppoMail.length; i++){
    var emailUtenteDefinitiva = gruppoMail[i]

    if(emailUtente ===  emailUtenteDefinitiva) {
        console.log("La tua e-mail è presente");
        var presente = true;
                                               }

                                            }

if (!presente) {
    console.log("La tua e-mail non è presente");
}