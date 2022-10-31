String.prototype.camelCase=function(){
    if(this.length === 0) return ''
    else return this.split(' ').filter(x => x).map(word => word[0].toUpperCase() + word.slice(1, word.length)).join('')
}

console.log(" camel case word".camelCase())