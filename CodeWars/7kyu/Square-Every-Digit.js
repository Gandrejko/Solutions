function squareDigits(num){
    const str = num + '';
    let newstr = '';
    for(let i = 0; i < str.length; i++) {
        newstr += Math.pow(+str[i], 2);
    }
    return +newstr;   
}