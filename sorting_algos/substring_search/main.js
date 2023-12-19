function searchSubString(longString, shortString) {
    var count = 0;
    for (var i = 0; i <= longString.length - shortString.length; i++) {
        var match = true;
        for (var j = 0; j < shortString.length; j++) {
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
var longText = "bazoom buz biz boom bazoom";
var searchWord = "bazoom";
var result = searchSubString(longText, searchWord);
console.log("Anzahl der Vorkommen von '".concat(searchWord, "': ").concat(result));
