function merge(arr1, arr2) {
    var result = [];
    var indexOne = 0;
    var indexTwo = 0;
    while (indexOne < arr1.length && indexTwo < arr2.length) {
        if (arr1[indexOne] < arr2[indexTwo]) {
            result.push(arr1[indexOne]);
            indexOne++;
        }
        else {
            result.push(arr2[indexTwo]);
            indexTwo++;
        }
    }
    while (indexOne < arr1.length) {
        result.push(arr1[indexOne]);
        indexOne++;
    }
    while (indexTwo < arr2.length) {
        result.push(arr2[indexTwo]);
        indexTwo++;
    }
    return result;
}
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var middle = Math.floor(array.length / 2);
    var leftHalf = array.slice(0, middle);
    var rightHalf = array.slice(middle);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}
var unsortedArray = [5, 4, 3, 2, 1];
console.log("Unsorted:", unsortedArray);
var sortedArray = mergeSort(unsortedArray);
console.log("Sorted:", sortedArray);
