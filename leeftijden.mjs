import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let persoon1 = {
    naam: 'Tom',
    leeftijd: '32'
}

let persoon2 = {
    naam: 'Céline', 
    leeftijd: '30'
}

function oudste(a, b){
    if(a.leeftijd < b.leeftijd){
        console.log(b.naam + ' is ouder dan ' + a.naam);
    }else{
        console.log(a.naam + ' is ouder dan ' + b.naam);
    }
}
let resultaat = oudste(persoon1, persoon2)

process.exit()