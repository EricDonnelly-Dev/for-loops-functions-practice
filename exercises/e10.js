// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
    let searchResults=[];
    for (const a of array) {
        const name=a.name;
        const nameArray = name.split('');
        for(const nLetter of nameArray){
            if (nLetter ===letter || nLetter === letter.toUpperCase())
                searchResults.push(a.name)
        }
    }
    return searchResults;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
