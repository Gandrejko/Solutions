function toCamelCase(str){
    const arr = str.includes('-') ? str.split('-') : str.split('_');
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        result += element[0].toUpperCase() + element.slice(1);        
    }
    return result;
}

console.log(toCamelCase("the-stealth-warrior"))