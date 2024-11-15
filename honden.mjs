import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hond1 = {
    naam: 'Brutus',
    leeftijd: 3,
    isSpeels: true
}

let hond2 = {
    naam: 'Boris',
    leeftijd: 3, 
    isSpeels: false
}

hondenlijst = [hond1, hond2]
process.exit()