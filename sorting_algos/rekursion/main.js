//Übung 1 - schreiben Sie eine Rekursive Funktion die einen String entgegennimmt und ihn umgekehrt ausgibt
function reverseString(s) {
    if (s.length <= 1) {
        return s;
    }
    return reverseString(s.slice(1)) + s.charAt(0);
}
var testString = "hallo";
var reversedString = reverseString(testString);
console.log(reversedString); //olleh
//Übung 2 - schreiben Sie eine Rekursive Funktion die überprüft,
//          ob ein Text von vorne und hinter das gleiche Wort ergibt (=Palindrome)
//          Die Funktion returned true oder false
function isPalindrome(text) {
    if (text.length <= 1) {
        return true;
    }
    if (text.charAt(0) !== text.charAt(text.length - 1)) {
        return false;
    }
    return isPalindrome(text.slice(1, -1));
}
var testStrings = ["radar", "hello", "level"];
testStrings.forEach(function (testString) {
    console.log("Ist \"".concat(testString, "\" ein Palindrom? ").concat(isPalindrome(testString)));
}); //true, false, true
//Übung 3 - schreiben Sie eine Rekursive Funktion die someRecursive heißt und
//          ein Array und eine Callback Funktion entgegennimmt.
//          Die Funktion returned true wenn ein Wert im Array true ergibt, wenn er in die Callback Funktion eingegeben wird
function someRecursive(array, callback) {
    if (array.length === 0) {
        return false;
    }
    if (callback(array[0])) {
        return true;
    }
    return someRecursive(array.slice(1), callback);
}
function isEven(num) {
    return num % 2 === 0;
}
var array = [1, 3, 5, 7, 10];
var result = someRecursive(array, isEven);
console.log(result); //true
//Übung 4 - schreiben Sie eine Funktion die ein Array bzw. ein Verschachteltes Array entgegennimmt
//          und alle Arrays darin auflöst. Die Funktion sollte flatten() heißen und ein einfaches
//          Array zurückgeben. z. B.: [3, [[[9, 0]]], 7] wird zu [3, 9, 0, 7].
function flatten(arr) {
    var flatArray = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (Array.isArray(element)) {
            flatArray = flatArray.concat(flatten(element));
        }
        else {
            flatArray.push(element);
        }
    }
    return flatArray;
}
var nestedArray = [3, [[[9, 0]]], 7];
var flatArray = flatten(nestedArray);
console.log(flatArray); //(4) [3, 9, 0, 7]
//Übung 5 - schreiben Sie eine rekursive Funktion die ein Array mit Strings entgegennimmt und
//          alle Angangsbuchstaben der Strings in Großbuchstaben umwandelt. Die Funktion sollte capitalizeFirst() heißen.
//          z. B.: ['car','taco','banana'] wird zu ['Car','Taco','Banana']
function capitalizeFirst(arr) {
    if (arr.length === 0) {
        return [];
    }
    return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)));
}
var testArray = ['car', 'taco', 'banana'];
var capitalizedArray = capitalizeFirst(testArray);
console.log(capitalizedArray); //['Car', 'Taco', 'Banana']
//Übung 6 - erstellen Sie eine rekursive Funktion die aus einem verschachtelten Objekt alle geraden Zahlen sucht
//          und sie summiert. Die Funktion sollte nestedEvenSum() heißen.
function nestedEvenSum(obj) {
    var sum = 0;
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            sum += nestedEvenSum(obj[key]);
        }
        else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}
var testObj = {
    a: 2,
    b: { b1: 3, b2: 4, b3: { b31: 6, b32: 7 } },
    c: { c1: 8, c2: 'nicht eine Zahl' },
    d: 10
};
var sumOfEvens = nestedEvenSum(testObj);
console.log(sumOfEvens); //30
