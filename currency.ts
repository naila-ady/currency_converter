#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//78692
//creating variable for currency list and their rates
let exchange_rates:any ={
    "USD":1,  //BASE CURRENCY
   "EUR":0.9, //EURO
    "JYP":113, //JAPANESE
    "CAD":1.3, //CANADIAN
    "AED":78,  //UAE
    "PKR":280 //PAKISTAN
// can add more  currencies
}
//using propmt to ask the user to select currency to  convert
let user_answer= await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:chalk.blue("select the currency to convert from:"),
        choices:["USD", "EUR","JYP","CAD","AED","PKR"],
    },
    {
        name:"to_currency",
        type:"list",
        message:chalk.blue("Select the currency to convert into:"),
        choices:["USD", "EUR","JYP","CAD","AED","PKR"],
    },
    {
        name:"amount",
        type:"input",
        message:chalk.blue("Enter the amount of currency to convert:"),
    }
]);
//creating 3 variables for asking three questions from userfor the conversion of currency
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount=exchange_rates[user_answer.to_currency];
let amount=user_answer.amount;
//formula for conversion of currency
let base_amount= amount/ from_amount;
let converted_amount=base_amount*to_amount

//display the coverted amount
console.log(`converted_amount=${converted_amount}`);