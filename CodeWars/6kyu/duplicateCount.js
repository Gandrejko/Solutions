function duplicateCount(text){
    const obj = {};
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        const element = text[i].toLowerCase();
        if(!obj.hasOwnProperty(element)) {
            obj[element] = 1
        } else obj[element] += 1  
    }
    for (const key in obj) {
        if (obj[key] > 1) {
            count++;            
        }
    }
    return count;
}

console.log(duplicateCount("aabbcde"))