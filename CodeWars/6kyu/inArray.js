function inArray(array1,array2){
    const result = [];
    array1.forEach(e => {
        array2.forEach(el => {
            if(el.includes(e) && !result.includes(e)) result.push(e)
        });
    });
    return result.sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))