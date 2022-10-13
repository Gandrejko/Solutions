function solution(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const element = string[i];     
        if(element === element.toUpperCase()) result += " " + element
        else result += element
    }
    return result
}

console.log(solution('camelCasing'))