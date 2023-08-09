// Ask for account
// Check if account exists
// If account does not exist ask to create account
// Ask what they want to do if the acocunt exist
// Execute command
// view
// Widraw
// Deposit

// Account object 
const Account = require("./Account");
const CommandLine  = require("./CommandLine")

async function mai() {
    const accountName = await CommandLine.ask("Which account would you like to access? ")
    const account = Account.find
}

