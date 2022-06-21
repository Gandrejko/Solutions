function squareOrSquareRoot(array) {
    array.forEach((e , i) => {
        if(Math.floor(Math.sqrt(e)) == Math.sqrt(e)) {
            e = Math.sqrt(e);
        } else {
            e = Math.pow(e, 2);
        }
        array[i] = e;
        i++;
    }); 
    return array;
}