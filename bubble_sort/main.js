function bubbleSort(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
            }
        }
    }
    return array;
}
var unsortedArray = [5, 4, 3, 2, 1];
console.log("Unsorted:", unsortedArray);
var sortedArray = bubbleSort(unsortedArray);
console.log("Sorted", sortedArray);
