function isPangram(string){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    for (let i = 0; i < string.length; i++) {
        if(alphabet.includes(string[i].toUpperCase())) {
            alphabet.splice(alphabet.indexOf(string[i].toUpperCase()), 1);
        }
        
    }
    return alphabet.length === 0 ? true : false;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));