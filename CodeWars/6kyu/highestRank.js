function highestRank(arr){
    const obj = {};
    let result = 0;
    let max = 0;
    arr.forEach(num => {
        if(num in obj) obj[num]++;
        else obj[num] = 1;
        for (const key in obj) {
            if (obj[key] > max) {
                result = +key;
                max = obj[key];
            }
        }
    });
    console.log(obj);
    

    return result
}

console.log(highestRank([12, 14, 8, 12, 7, 6, 4, 10, 12]) === 12)
console.log(highestRank( [12,10,8,12,7,6,4,10,12,10]) === 12)
