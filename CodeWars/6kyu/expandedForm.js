function expandedForm(num) {
    const numLength = num.toString().length;
    const result = [];
    for (let i = numLength; i >= 1; i--) {
        const element = num % Math.pow(10, i) - num % Math.pow(10, i - 1);
        if(element !== 0) result.push(element)
    }

    return result.join(' + ')
}

console.log(expandedForm(12) === '10 + 2')
console.log(expandedForm(42) === '40 + 2')
console.log(expandedForm(70304) === '70000 + 300 + 4')
