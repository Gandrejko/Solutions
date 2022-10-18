var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const ei = nums[i];
        for (let j = 0; j < nums.length; j++) {
            const ej = nums[j];
            if(i !== j && ei + ej === target) return [i, j]          
        }        
    }

    return []
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))

