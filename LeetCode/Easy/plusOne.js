var plusOne = function(digits) {
    return (BigInt(digits.join("")) + 1n).toString().split('')
};

console.log(plusOne([1,2,3]))