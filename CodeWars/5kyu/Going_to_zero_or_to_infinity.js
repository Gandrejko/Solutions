function going(n) {
    var result = 1, accumulate = 1;
    for( i=n; i>1; i--){

        accumulate /= i;
        result += accumulate;
        
    }
    return parseFloat(result.toString().substring(0,8));
}