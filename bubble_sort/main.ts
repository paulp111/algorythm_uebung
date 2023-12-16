function bubbleSort(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

const unsortedArray: number[] = [5, 4, 3, 2, 1];
console.log("Unsorted:", unsortedArray);
const sortedArray: number[] = bubbleSort(unsortedArray);
console.log("Sorted", sortedArray);
