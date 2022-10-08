function rgb(r, g, b){
    const arr = [r, g, b];
    const result = [];
    arr.forEach(e => {
        if(e <= 0) result.push('00')
        else if(e >= 255) result.push('ff')
        else {
            if(e.toString(16).length === 1) {
                result.push("0" + e.toString(16))
            } else {
                result.push(e.toString(16))
            }
        }
    });

    return result.join('').toUpperCase()
}

console.log(rgb(300,255,255));