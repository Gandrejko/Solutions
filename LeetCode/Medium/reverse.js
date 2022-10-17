var reverse = function(x) {
    let result = 0;
    if(x > Math.pow(2, 31) || x < -Math.pow(2, 31)) console.log(1);
    if(x > 0) {
        result = +x.toString().split('').reverse().join('')
    }
    else {
        result = -(+(x.toString().slice(1)).split('').reverse().join(''))
    }

    return (result > Math.pow(2, 31) || result < -Math.pow(2, 31)) ? 0 : result;
}    

console.log(reverse(1534236469))
