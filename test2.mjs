// Function to simulate user input in the browser
function getUserInput(message) {
    return prompt(message);
}

// Function to log messages to the web page
function logToPage(message) {
    const outputDiv = document.getElementById('output');
    const logItem = document.createElement('div');
    logItem.textContent = message;
    logItem.className = 'log';
    outputDiv.appendChild(logItem);
}

// Override console.log to also display messages on the page
console.log = function(message) {
    logToPage(message);
};
/*
Het spelletje zeeslag:
-we werken met functies om verschillende spelregels te introduceren:
    -Max aantal boten in het veld is 5
    -Valt de boot binnen het speelveld
    -Controleer of de lengte van de boten tussen de 2 & 5 ligt
    -controleer of de boten niet overlappen
        ->telkens als er een regel wordt overschreden dan wordt dit opgevangen tot de gebruiker de juiste regels volgt.
    -totaal aantal boten worden geteld
    -
*/
/* speelveld */

/* berekennen van het speelveld outer loop stelt de hoogte voor,
per rij (y) initialiseren we een andere rij (x) */

function speelveld(grootte){
    let veld = [];
    let veld2= [];
    for(let i = 0; i < grootte; i ++){
        veld[i] = [];
        veld2[i] = [];
        for(let j = 0; j < grootte; j++){
            veld[i][j] = '.';
            veld2[i][j] = '.';

        }    
    }return {veld, veld2};
}


/* functie om het speelveld te printen op basis van de output van de functie speelveld */
function printSpeelveld(veld){    
    for(let i = 0; i < veld.length; i ++){
        let breedte = '';
        for(let j = 0; j < veld[i].length; j++){
            breedte += veld[i][j];
        }console.log(breedte);
    }
}

/* einde speelveld */
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

/* boot */

/* controleren of de lengte van het bootje tussen 2 en 5 ligt. */
function controleerLengteBoot(lengteBoot){
    if(lengteBoot >= 2 && lengteBoot <= 5){
        return true;
    }else{
        console.log('Lengte van je bootje is niet correct')
    }return null //met return null kunnen we de output beter manipuleren.
}

/* controleren of de lengte van het bootje in het speelveld past */
function controleerPositieBoot(y, x, lengte, richting, veld) {
    if ((richting === 'links' && x - lengte < 0) ||
        (richting === 'rechts' && x + lengte > veld[0].length) ||
        (richting === 'boven' && y - lengte < 0) ||
        (richting === 'onder' && y + lengte > veld.length)
        ){
        console.log('je bootje valt buiten het veld, probeer het opnieuw :');
        return false;
    }
    return true;
}

// overlap controleren van bootjes
function dubbelBezet(y, x, lengte, richting, veld){
    for(let i = 0; i <= lengte; i++){
	    if (richting == 'rechts' && veld[y][x-i] == 'B' ||
		    richting == 'links' && veld[y][x-i] == 'B' ||
		    richting == 'boven' && veld[y-i][x] == 'B' ||
		    richting == 'onder' && veld [y+i][x] == 'B'
		    ){
		    console.log('hier staat al een bootje, probeer het opnieuw :)');
		    return false
        }
        return true
    }
}

// bootje printen
function printBoot(y, x, lengte, richting, veld){
    for(let i = 0; i < lengte; i++){
        if(richting == 'links'){
            veld[y][x-i] = 'B';

        }else if(richting == 'rechts'){
            veld[y][x+i] = 'B';

        }else if(richting == 'boven'){  
            veld[y-i][x] = 'B';

        }else if(richting == 'onder'){
            veld[y+i][x] = 'B';
        }
    }
    return veld
}

//tellen het aantal B's in het veld.
function telBoten(veld){
    let totaalBoten = 0;
    for(let i = 0; i < veld.length; i ++){
        for(let j = 0; j < veld[i].length; j ++){
            if(veld[i][j] == 'B'){
                totaalBoten++;
            }
        }
    }return totaalBoten
}

// einde boot
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

/* schoten */

function schoten(y, x, geraakt, veld, veld2){
    if(y >= 0 && y < veld.length && x >= 0 && x < veld.length){
        if(veld[y][x] == 'B'){
            veld2[y][x] = '*';
            geraakt ++
        }else{
            veld2[y][x] = '^';
        }
        return{veld, veld2, geraakt}
    }else{
        console.log('je coöordinaten liggen buiten het speelveld');
        return false;
    };
} 



// einde schoten
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

// printen 

// hier wordt het veld opgeroepen en geprint
let grootte = parseFloat(await userInput.question('Geef de grote van je veld in: '))
console.log('je speelveld:');
let {veld, veld2} = speelveld(grootte);
printSpeelveld(veld)

/* hier worden de boten opgeroepen en geprint enkel als de gebruiker het juiste aantel boten ingeeft */
let aantalBoten;
let validInput = false;
while (!validInput) {
    aantalBoten = parseFloat(await userInput.question('Hoeveel bootjes wil je printen? Maximum 5: '));
    if (aantalBoten > 0 && aantalBoten <= 5) {
        validInput = true;
    } else {
        console.log('Je mag maar vijf boten printen!');
    }
}

for (let i = 0; i < aantalBoten; i++) {
    let validBootInput = false;
    while (!validBootInput) {
        console.log('Bootje ' + (i + 1));
        let coordinaat3 = parseFloat(await userInput.question('Geef je y-coördinaat voor je boot in: ')) - 1;
        let coordinaat4 = parseFloat(await userInput.question('Geef je x-coördinaat voor je boot in: ')) - 1;
        let lengteBoot = parseFloat(await userInput.question('Geef de lengte in voor je boot (tussen 2-5): '));
        let richtingBoot = await userInput.question('Geef de richting van je bootje in: links/rechts of boven/onder: ');

        if (controleerLengteBoot(lengteBoot) &&
            controleerPositieBoot(coordinaat3, coordinaat4, lengteBoot, richtingBoot, veld) &&
            dubbelBezet(coordinaat3, coordinaat4, lengteBoot, richtingBoot, veld)) {
            printBoot(coordinaat3, coordinaat4, lengteBoot, richtingBoot, veld);
            validBootInput = true;
        }
    }
}


// hier worden de schoten opgeroepen en behandeld.
let totaalBoten = telBoten(veld);
let geraakt = 0;
let schotResultaat;

do{
    let coordinaat1 = parseFloat(await userInput.question('Geef de y-coördinaat van je schot in: ')) - 1;
    let coordinaat2 = parseFloat(await userInput.question('Geef de x-coördinaat van je schot in: ')) - 1;
    schotResultaat = schoten(coordinaat1, coordinaat2, geraakt, veld, veld2);

    if (schotResultaat !== false) {
        veld = schotResultaat.veld;
        geraakt = schotResultaat.geraakt;
        console.log('geraakt ' + geraakt + ' / ' + totaalBoten);
        printSpeelveld(veld2);
    }    
}
while (geraakt < totaalBoten)
console.log('Je hebt alles geraakt, het spel is voorbij, proficiat! Je mag je diploma "Bachelor in de IT" gaan afhalen aan het secreteriaat :-)');
process.exit()