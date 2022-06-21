function oddOrEven(n) {
    let result = '';
    return (n % 2 == 1) ? result = 'Either' : (n / 2) % 2 == 1 ? result = 'Odd' : result = 'Even';
}