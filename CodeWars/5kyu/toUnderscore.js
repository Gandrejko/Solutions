function toUnderscore(string) {
    return string.split(/\.?(?=[A-Z])/).join('_').toLowerCase();
}

console.log(toUnderscore("TestController"))