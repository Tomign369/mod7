import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hond1 = {
    naam: 'Brutus',
    leeftijd: 3,
    isSpeels: true,
    stelVoor: function(){
        let string1 = 'hallo, ik ben ' + this.naam + ' ik ben ' + this.leeftijd + ' jaar oud '
        if(this.isSpeels){
            string1 += 'en ik ben speels.';
        }else{
            string1 += 'en ik ben niet speels.';
        }console.log(string1)
    }
}

let hond2 = {
    naam: 'Boris',
    leeftijd: 3, 
    isSpeels: false,
    stelVoor: function(){
        let string1 = 'hallo, ik ben ' + this.naam + ' ik ben ' + this.leeftijd + ' jaar oud '
        if(this.isSpeels){
            string1 += 'en ik ben speels.';
        }else{
            string1 += 'en ik ben niet speels.';
        }console.log(string1)
    }
}
hond1.stelVoor()
hond2.stelVoor()
process.exit()