function spinWords(string){
    const arr = string.split(' ');
    const result = [];
    arr.forEach(e => {
        if(e.length >= 5) result.push(e.split('').reverse().join(''))
        else result.push(e)
    });

    return result.join(' ')
}

console.log(spinWords("Welcome") == "emocleW");
console.log(spinWords("Just kidding there is still one more") == "Just gniddik ereht is llits one more");
