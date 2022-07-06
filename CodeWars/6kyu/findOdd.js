function findOdd(A) {
    const set = new Set();
    A.forEach(e => !set.has(e) ? set.add(e) : set.delete(e));
    return [...set][0];
}

