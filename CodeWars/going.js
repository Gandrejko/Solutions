// function going(n) {
//     function factorial(x) {
//         let result = BigInt(1);
//         for (let i = BigInt(1); i <= x; i++) {
//             result *= i;
//         }
//         return result;
//     }
//     function loop(x) {
//         let result = BigInt(0);
//         for (let i = BigInt(1); i <= x; i++) {
//             result += factorial(i);
//         }
//         return result;
//     }

//     // console.log(loop(n));
//     // console.log(factorial(n));
//     // console.log(Math.round(((loop(n)+'').slice(0,20) / (factorial(n)+'').slice(0,20))*1000000)/1000000);
//     // console.log(typeof(Math.round(((loop(n)+'').slice(0,20) / (factorial(n)+'').slice(0,20))*1000000)/1000000));
//     return Math.round(((loop(n)+'').slice(0,20) / (factorial(n)+'').slice(0,20))*1000000)/1000000;
// }

// // going(22);

// console.log(going(179));




// function going(n) {
//     function factorial(x) {
//         let result = 1;
//         for (let i = 1; i <= x; i++) {
//             result *= i;
//         }
//         return result;
//     }
//     function loop(x) {
//         let result = 0;
//         for (let i = 1; i <= x; i++) {
//             result += factorial(i);
//         }
//         return result;
//     }

//   return Math.floor(((loop(n)+'').slice(0,2000000) / (factorial(n)+'').slice(0,2000000))*1000000)/1000000;
     
// }

// console.log(going(170));


function going(n) {
    var result = 1, accumulate = 1;
    for( i=n; i>1; i--){
        accumulate /= i;
        result += accumulate;
        console.log(accumulate);
    }
    return parseFloat(result.toString().substring(0,8));
}
  
console.log(going(5));
