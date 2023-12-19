function swap(arr: number[], index1: number, index2: number): void {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function pivot(arr: number[], start: number = 0, end: number = arr.length - 1): number {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

function quicksort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}

let arr: number[] = [13, 4, 5, 78, 31];
console.log("Unsorted:", arr);
let sortedArr = quicksort(arr);
console.log("Sorted:", sortedArr);
