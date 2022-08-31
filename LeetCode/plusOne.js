var plusOne = function(digits) {
    let string = '';
    digits.forEach(e => {
        string += e;
    });
    return (+string + 1).toString().split('');
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));