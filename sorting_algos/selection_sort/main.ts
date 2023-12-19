function selectionSort(array: number[]): number[] {
    let n: number = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex: number = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {

                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

const unsortedArr: number[] = [5, 4, 3, 2, 1];
console.log("Unsorted:", unsortedArr);
const sortedArr: number[] = selectionSort(unsortedArr);
console.log("Sorted:", sortedArr);
