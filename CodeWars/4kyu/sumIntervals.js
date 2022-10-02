function sumIntervals(intervals) {
    let resultSum = 0;

    intervals.forEach(interval => {
        resultSum += interval[1] - interval[0];
    });

    return resultSum;
}

console.log(sumIntervals([[1,5],[1,5]]))