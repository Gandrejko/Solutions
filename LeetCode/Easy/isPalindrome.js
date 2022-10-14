var isPalindrome = function(x) {
    const str = x + '';

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - 1 - i]) return false       
    }
    return true
};

console.log(isPalindrome(-121))