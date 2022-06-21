function powersOfTwo(n){
    let arr = [1];
    
    for(let i = 1; i <= n; i++){
        arr[i] = arr[i-1] * 2;
    }

    return arr;
}