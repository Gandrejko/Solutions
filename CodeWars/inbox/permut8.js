function permut8(arr, prepend) {
    let version, 
        el, 
        result = [];
    prepend = prepend || [];
    if (arr.length === 1) return [arr]; // Повертаємо масив, якщо там лише один елемент
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 2) {
            result.push(prepend.concat([arr[i], arr[(i + 1) % 2]]));
        } 
        else {
            version = arr.slice();
            el = version.splice(i, 1);
            console.log("result1", result);
            result = result.concat(permut8(version, prepend.concat(el)));
            console.log("result2", result);
        }
    }
    console.log('===')
    return result;
}
let test1 = ['a', 'b', 'c', 'd'];
let test2 = ['a', 'b'];

console.log(permut8(test1))
