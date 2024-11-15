import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let rekenmachine = {
    optellen : function (a, b){
        let som = a + b
        return som;
    },

    aftrekken : function(a, b){
        let verschil = a - b
        return verschil;
    }, 

    vermenigvuldigen : function(a, b){
        let product = a * b
        return product;
    },

    delen : function(a, b){
        let deling = a / b
        return deling;
    }

}

console.log(rekenmachine.delen(, 4))
process.exit()