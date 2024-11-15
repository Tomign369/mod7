
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* 
Schrijf functies om de oppervlaktes van de volgende vormen te berekenen:

    cirkel: Pi x straal x straal (je kan de waarde van Pi opvragen met Math.PI)
    driehoek: basis x hoogte gedeeld door 2
    rechthoek: zijde1 x zijde2
    vierkant: zijde x zijde

Zorg ervoor dat je functie om de oppervlakte van een vierkant te berekenen de
functie om de oppervlakte van een rechthoek te berekenen gebruikt. 
Zorg ervoor dat al deze functies de waardes terugsturen en zelf geen output hebben.


process.exit()