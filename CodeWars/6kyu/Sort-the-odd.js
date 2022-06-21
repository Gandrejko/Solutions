function sortArray(array) {
    const arr = [];
    array.forEach((e, i) => {
        if(e % 2 !== 0) {
            arr.push(e);
            delete array[i];
        }
    });
    arr.sort((a,b) => a-b);
    for (let i = 0; i < array.length; i++) {
        const k = 0;
        if(array[i] === undefined) {
            array[i] = arr[k];
            arr.shift(k);
        };
    }
    return array;
}