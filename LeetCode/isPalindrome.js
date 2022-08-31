var isPalindrome = function(x) {
    const array = x.toString().split('');
    for (let i = 0; i < array.length/2; i++) {
        if(array[i] !== array[array.length - i - 1]) return false;
    }
    return true;
};

console.log(isPalindrome(1222));