var singleNumber = function(nums) {
    const obj = {};
    nums.forEach(e => {
        if(obj.hasOwnProperty(e)) obj[e] += 1
        else obj[e] = 1
    });
    for (const key in obj) {
        if(obj[key] === 1) return key
    }
};

console.log(singleNumber([2,2,1]))