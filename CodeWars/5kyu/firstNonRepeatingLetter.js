// function firstNonRepeatingLetter(s) {
//     const str = s.toLowerCase();
//     const obj = {};

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if(char in obj) {
//             obj[char] += 1
//         } else{
//             obj[char] = 1
//         }
//     }
//     console.log(obj)
//     for (const key in obj) {
//         if (obj[key] === 1) {
//             return key;
//         }
//     }

//     return '';
// }


function firstNonRepeatingLetter(s) {
    const arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i];
        if(arr.filter(n => n.toLowerCase() === letter.toLowerCase()).length === 1) {
            return letter;
        }
    }

    return '';
}

console.log(firstNonRepeatingLetter('Simple Tests'))