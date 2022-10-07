function pyramid(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        const element = [];
        for (let j = 0; j < i; j++) {
            element.push(1);            
        }
        result.push(element);
    }

    return result;  
}

console.log(pyramid(3))