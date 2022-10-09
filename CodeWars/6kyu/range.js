function range(start, stop, step) {
    const result = [];
    if(stop == undefined) {
        stop = start;
        start = 0;
    }
    for (let i = start; i < stop; i += step || 1) {
        if(step !== 0) result.push(i);
        else result.push(start)
    }

    return result
}

console.log(range(1));