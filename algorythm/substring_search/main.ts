function searchSubString(longString, shortString) {
    let count = 0;

    for (let i = 0; i <= longString.length - shortString.length; i++) {
        let match = true; 
        for (let j = 0; j < shortString.length; j++) {
            if (longString[i + j] !== shortString[j]) {
                match = false;
                break; 
            }
        }
        if (match) {
            count++;
        }
    }

    return count === 0 ? -1 : count;
}

const longText = "bazoom buz biz boom bazoom";
const searchWord = "bazoom";
const result = searchSubString(longText, searchWord);
console.log(`Anzahl der Vorkommen von '${searchWord}': ${result}`);
