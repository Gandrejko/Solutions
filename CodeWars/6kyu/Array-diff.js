function arrayDiff(a, b) {
    const result = [];
    const set = new Set();
    b.forEach(e => {
        set.add(e);
    });
    for (let i = 0; i < a.length; i++) {
        if(!set.has(a[i])) result.push(a[i]);
    }
    return result;
}