function insertionSort(array) {
    var n = array.length;
    for (var i = 1; i < n; i++) {
        var current = array[i];
        var j = void 0;
        for (j = i - 1; j >= 0 && array[j] > current; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = current;
    }
    return array;
}
var unsortedArr = [5, 4, 3, 2, 1];
console.log("Unsorted:", unsortedArr);
var sortedArr = insertionSort(unsortedArr);
console.log("Sorted:", sortedArr);
