function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function pivot(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    var pivot = arr[start];
    var swapIndex = start;
    for (var i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
function quicksort(arr, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left < right) {
        var pivotIndex = pivot(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}
var arr = [13, 4, 5, 78, 31];
console.log("Unsorted:", arr);
var sortedArr = quicksort(arr);
console.log("Sorted:", sortedArr);
