var sortColors = function(nums) {
    const result = nums.filter(x => x === 0).concat(nums.filter(x => x === 1)).concat(nums.filter(x => x === 2));
    return result
};

console.log(sortColors([2, 0, 1]));