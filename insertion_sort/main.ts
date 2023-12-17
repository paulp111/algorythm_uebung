function insertionSort(array: number[]): number[] {
    let n: number = array.length;

    for (let i = 1; i < n; i++) {
        let current = array[i];
        let j: number;

        for (j = i - 1; j >= 0 && array[j] > current; j--) {
            array[j + 1] = array[j];
        }

        array[j + 1] = current;
    }

    return array;
}

const unsortedArr: number[] = [5, 4, 3, 2, 1];
console.log("Unsorted:", unsortedArr);
const sortedArr: number[] = insertionSort(unsortedArr);
console.log("Sorted:", sortedArr);
