function moveZeros(arr) {
    arr.forEach(e => {
        if(e === 0) {
            arr.splice(arr.indexOf(e), 1);
            arr.push(e);
        }
    });

    return arr;
}

console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]));