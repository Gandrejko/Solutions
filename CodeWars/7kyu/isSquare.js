var isSquare = function(n){ return Math.sqrt(n) % 1 === 0}

console.log(isSquare(-1) === false)
console.log(isSquare(4) === true)
console.log(isSquare(3) === false)



