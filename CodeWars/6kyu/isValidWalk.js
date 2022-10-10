function isValidWalk(walk) {
    const result = {x: 0, y: 0, time: 0};
    walk.forEach(e => {
        if(e === 'n') {result.y += 1; result.time++}
        if(e === 's') {result.y -= 1; result.time++}
        if(e === 'w') {result.x -= 1; result.time++}
        if(e === 'e') {result.x += 1; result.time++}
    });
    return (result.x === 0 && result.y === 0 && result.time === 10)
}

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));