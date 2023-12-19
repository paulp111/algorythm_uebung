function getDigit(num: number, i: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(nums: number[]): number {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(nums: number[]): number[] {
    let maxDigitCount = mostDigits(nums);
    console.log(`Max Digit Count: ${maxDigitCount}`);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
        console.log(`Digit place: ${k}`);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            console.log(`Number: ${nums[i]}, auf ${k}: ${digit}`);
            digitBuckets[digit].push(nums[i]);
        }

        nums = ([] as number[]).concat(...digitBuckets);
        console.log(`Sortiertes Array ${k}: ${nums}`);
    }

    return nums;
}

const data = radixSort([5, 12, 3, 11]);
console.log(`Sortierte Data: ${data}`);






//return digit;

//getDigit(4978, 0) //8
//getDigit(491, 1) //9