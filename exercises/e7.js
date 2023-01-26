// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
    let lowestBalanceNotZero= [];
    let arrayIndexLowest;
    let currentLowest = array[0].balance;
    for (const val in array) {
        if (array[val].balance === 0) continue;
        if (array[val].balance < currentLowest) {
            currentLowest = array[val].balance;
            arrayIndexLowest = val;
        }
    }
    lowestBalanceNotZero.push(array[arrayIndexLowest])
    return lowestBalanceNotZero;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
