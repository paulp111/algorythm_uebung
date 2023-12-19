function binarySearch(array: number[], searchValue: number): number {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (array[middle] === searchValue) {
            return middle; 
        }

        if (array[middle] < searchValue) {
            left = middle + 1; 
        } else {
            right = middle - 1; 
        }
    }

    return -1; 
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const searchNum = 7;
const result = binarySearch(sortedArray, searchNum);
console.log(`Index von ${searchNum}: ${result}`); 

const missingNum = 4;
const missingResult = binarySearch(sortedArray, missingNum);
console.log(`Index von ${missingNum}: ${missingResult}`); 
