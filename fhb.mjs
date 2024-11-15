import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* 
Ontwerp een object voor de Fabienhogeschool Brussel met eigenschappen 
    naam (string),
    studenten (array van objecten, 
        waar elk object een student vertegenwoordigt met eigenschappen zoals:
        naam, leeftijd, en vakken), en 
        vakken (array van strings). 

Voeg een methode inschrijvenStudent toe waarmee je een student kunt inschrijven voor een cursus. 
*/


let Fabienhogeschool = {
    studenten: 
    [{}],


    

    voegtoeStudent : function(naam, leeftijd, vakken){
        this.studenten.push({
            naam: naam,
            leeftijd: leeftijd,
            vakken: vakken
        })
        
    }
}

console.log('inschrijving student')
let invoerNaam = await(userInput.question('geef de naam in '));
let invoerLeeftijd = await(userInput.question('geef de leeftijd in: '));
let invoerVakken = await(userInput.question('geef de vakken in: '));
Fabienhogeschool.voegtoeStudent(invoerNaam, invoerLeeftijd, invoerVakken)
console.log(Fabienhogeschool)



process.exit()