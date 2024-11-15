import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let bankrekening1 = {
    rekeningnr: '12345',
    saldo: 100,
    eigenaar: 'Henk',
    toonsaldo : function() {
        console.log('Er staat momenteel €' + this.saldo + ' op de rekening met nummer ' + this.rekeningnr + '.')
    },
    overschrijving: function(a, b){
        this.saldo = this.saldo - b 
        a.saldo = a.saldo + b
        console.log('Er werd €' + b + ' overgemaakt naar ' + a.rekeningnr)
    }
}

let bankrekening2 = {
    rekeningnr: '6789',
    saldo: 50,
    eigenaar: 'Jos',
    toonsaldo : function() {
        console.log('Er staat momenteel €' + this.saldo + ' op de rekening met nummer ' + this.rekeningnr + '.')
    },
    overschrijving: function(a, b){
        this.saldo = this.saldo - b
        a.saldo = a.saldo + b
        console.log('Er werd €' + b + ' overgemaakt naar ' + a.rekeningnr)
    }
}

//bankrekening1.toonsaldo()
//bankrekening2.toonsaldo()

bankrekening1.overschrijving(bankrekening2, 50)
bankrekening2.toonsaldo()
bankrekening2.overschrijving(bankrekening1, 20)
bankrekening1.toonsaldo()



process.exit()