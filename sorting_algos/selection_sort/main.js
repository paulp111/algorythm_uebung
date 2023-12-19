function selectionSort(array) {
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            var temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}
var unsortedArr = [5, 4, 3, 2, 1];
console.log("Unsorted:", unsortedArr);
var sortedArr = selectionSort(unsortedArr);
console.log("Sorted:", sortedArr);
