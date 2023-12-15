function linearSearch(array, searchNum) {
    for (var index = 0; index < array.length; index++) {
        if (array[index] === searchNum) {
            return index;
        }
    }
    return -1;
}
var availNum = [10, 20, 30, 40, 50];
var searchNum = 30;
var foundIndex = linearSearch(availNum, searchNum);
console.log("Index von ".concat(searchNum, ": ").concat(foundIndex));
var missingNum = 60;
var missingIndex = linearSearch(availNum, missingNum);
console.log("Index von ".concat(missingNum, ": ").concat(missingIndex));
