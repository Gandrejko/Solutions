function twistedSum(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        if(i > 9) {
            result += i.toString().split('').reduce((acc, res) => +acc + +res);
        } else result += i;
    }
    return result;
}

console.log(twistedSum(12));