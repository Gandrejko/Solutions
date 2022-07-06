function digital_root(n) {
    const num = n + '';
    let res = 0;
    for (let i = 0; i < num.length; i++) {
        res += +num[i];
    }
    if(n > 10) {
        res = digital_root(res);
    }
    return res;
}
