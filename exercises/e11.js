// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  let withdrawalArray =[];
    for (const v of array) {
        let vSum =0;
        if(!v.withdrawals) {withdrawalArray.push(0);}
        else {
            for (const vElement of v.withdrawals) {vSum += vElement}
            withdrawalArray.push(vSum)
        }
    }
    return withdrawalArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
