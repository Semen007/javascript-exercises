function listOfDigits(n) {
    return Array.from(String(n), Number);
};

console.log(listOfDigits(123));