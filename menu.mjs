import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let restaurant = 
{
    naam: 'Ambassade',
    keuken: 'Bourgondisch',
    menu: [ ],
    Toevoegen: function (gerecht, prijs)
    {
        this.menu.push
        ({
            gerecht
            ,prijs
        });
    }
}

let gerecht = await userInput.question('Geef een gerecht in: ');
let prijs = await userInput.question('Geef een prijs in: ');
restaurant.Toevoegen(gerecht, prijs);
console.log(restaurant.menu);

process.exit()