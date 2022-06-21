var repeatedNTimes = function(nums) {
    let set = new Set();
    let res;
    nums.forEach(e => {
        if(set.has(e)){
            res = e;
        } else{
            set.add(e);
        }
    });
    return res;
};

const sum = repeatedNTimes([1,2,3,3]);
