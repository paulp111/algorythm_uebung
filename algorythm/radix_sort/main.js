function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}
function mostDigits(nums) {
    var maxDigits = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}
function radixSort(nums) {
    var _a;
    var maxDigitCount = mostDigits(nums);
    console.log("Max Digit Count: ".concat(maxDigitCount));
    for (var k = 0; k < maxDigitCount; k++) {
        var digitBuckets = Array.from({ length: 10 }, function () { return []; });
        console.log("Digit place: ".concat(k));
        for (var i = 0; i < nums.length; i++) {
            var digit = getDigit(nums[i], k);
            console.log("Number: ".concat(nums[i], ", auf ").concat(k, ": ").concat(digit));
            digitBuckets[digit].push(nums[i]);
        }
        nums = (_a = []).concat.apply(_a, digitBuckets);
        console.log("Sortiertes Array ".concat(k, ": ").concat(nums));
    }
    return nums;
}
var data = radixSort([5, 12, 3, 11]);
console.log("Sortierte Data: ".concat(data));
//return digit;
//getDigit(4978, 0) //8
//getDigit(491, 1) //9
