function order(words){
    const wordsArr = words.split(' ');
    const result = [];

    for (let i = 1; i <= wordsArr.length; i++) {
        result.push(wordsArr.find(x => x.includes(i)))
    }

    return result.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))