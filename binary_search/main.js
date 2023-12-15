function binarySearch(array, searchValue) {
    var left = 0;
    var right = array.length - 1;
    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        if (array[middle] === searchValue) {
            return middle;
        }
        if (array[middle] < searchValue) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    return -1;
}
var sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
var searchNum = 7;
var result = binarySearch(sortedArray, searchNum);
console.log("Index von ".concat(searchNum, ": ").concat(result));
var missingNum = 4;
var missingResult = binarySearch(sortedArray, missingNum);
console.log("Index von ".concat(missingNum, ": ").concat(missingResult));
