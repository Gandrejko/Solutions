var isAnagram = function(s, t) {
    const sArr = s.split('').sort();
    const tArr = t.split('').sort();
    if(sArr.length !== tArr.length) return false;
    for (let i = 0; i < sArr.length; i++) {
        if(tArr[i] !== sArr[i]) return false
    }

    return true
};

console.log(isAnagram('anagram', "nagaram"))
console.log(isAnagram('rat', "car"))
console.log(isAnagram("aacc", "ccac"))


