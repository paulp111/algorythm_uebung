function linearSearch(array: number[], searchNum: number): number {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === searchNum) {
            return index; 
        }
    }
    return -1; 
}

const availNum = [10, 20, 30, 40, 50];
const searchNum = 30;
const foundIndex = linearSearch(availNum, searchNum);
console.log(`Index von ${searchNum}: ${foundIndex}`); 

const missingNum = 60;
const missingIndex = linearSearch(availNum, missingNum); 
console.log(`Index von ${missingNum}: ${missingIndex}`); 
