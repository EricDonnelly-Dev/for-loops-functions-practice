
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let balanceError =[];
    for (const a of array) {
        let deposits=0,withdrawals=0, balance = a.balance;
        if(!a.deposits ) deposits=0;
        else {for (const deposit of a.deposits) {deposits += deposit}}
        if(!a.withdrawals ) withdrawals=0;
        else {for (const w of a.withdrawals) {withdrawals += w}}
        if (balance !== (deposits -withdrawals)){
            balanceError.push(a)
        }
    }
    return balanceError
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
