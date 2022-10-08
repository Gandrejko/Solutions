function pigIt(str){
    const arr = str.split(' ');
    const result = [];
    arr.map(e => {
        if(!e.includes('!') && !e.includes('?')) {
            result.push(e.slice(1) + e[0] + 'ay');
        } else {
            result.push(e)
        }
        
    });
    return result.join(' ');
}

console.log(pigIt('Pig latin is cool !'));