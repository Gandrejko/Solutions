var majorityElement = function(nums) {
    const obj = {};
    let result = 0;
    let max = 0;

    nums.forEach(e => {
        if(obj.hasOwnProperty(e)) obj[e] += 1
        else obj[e] = 1
    });
    for (const key in obj) {
        if(obj[key] > max) {
            max = obj[key];
            result = key
        }
    }

    return result
};

console.log(majorityElement([3,2,3]))