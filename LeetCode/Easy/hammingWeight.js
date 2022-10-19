var hammingWeight = function(n) {
    return n.split('').filter(x => x == 1).length
};

console.log(hammingWeight('11111111111111111111111111111101'))