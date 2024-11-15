import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let autoGarage = {
    naam: '',
    autos: [],

    voegAutoToe: function(a, b) {
        this.autos.push({
            merk: a,
            bouwjaar: b
        });
    },

    vervangAuto: function(teVervangen, a, b) {
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].merk === teVervangen) {
                this.autos[i] = {
                    merk: a,
                    bouwjaar: b
                };
                return; 
            }
        }
        console.log('Auto niet gevonden. Toevoegen aan de lijst.');
        this.autos.push({
            merk: a,
            bouwjaar: b
        });
    }
}

autoGarage.voegAutoToe('Audi', 2020);
autoGarage.voegAutoToe('Mercedes', 2022);
autoGarage.vervangAuto('Bently', 'Tesla', 2024);
console.log(autoGarage.autos)
process.exit()