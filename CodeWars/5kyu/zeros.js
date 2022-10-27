// function zeros(n) {
//     let factorial = BigInt(1);
//     for (let i = 1; i <= n; i++) factorial *= BigInt(i);
//     const array = factorial.toString().split('').reverse();
//     let countZeros = 0;
//     let i = 0;
//     while(array[i] == 0) {
//         countZeros++;
//         i++;
//     }

//     return countZeros
// }

// console.log(zeros(30))


function zeros(n) {
    const elem = Math.floor(n / 5);
    return elem >= 5 ? elem + zeros(elem) : elem
}

for (let i = 1; i <= 100; i++) {
    console.log(i, zeros(i))    
}