multiplicationTable = function(size) {
    const result = [];
    for (let i = 1; i <= size; i++) {
        const array = [];
        for (let j = 1; j <= size; j++) {
            array.push(j * i);        
        }
        result.push(array);
    }
    return result;
}

console.log(multiplicationTable(4))