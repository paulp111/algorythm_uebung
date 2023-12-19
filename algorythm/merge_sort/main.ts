function merge(arr1: number[], arr2: number[]): number[] {
    let result: number[] = [];
    let indexOne: number = 0;
    let indexTwo: number = 0;

    while (indexOne < arr1.length && indexTwo < arr2.length) {
        if (arr1[indexOne] < arr2[indexTwo]) {
            result.push(arr1[indexOne]);
            indexOne++;
        } else {
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

function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const middle: number = Math.floor(array.length / 2);
    const leftHalf: number[] = array.slice(0, middle);
    const rightHalf: number[] = array.slice(middle);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

const unsortedArray: number[] = [5, 4, 3, 2, 1];
console.log("Unsorted:", unsortedArray);
const sortedArray: number[] = mergeSort(unsortedArray);
console.log("Sorted:", sortedArray);
