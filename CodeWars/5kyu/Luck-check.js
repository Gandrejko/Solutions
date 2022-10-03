function luckCheck(ticket){
    if(!+ticket){
        throw new Error();
    }
    let left = 0;
    let right = 0;
    for (let i = 0; i < ticket.length/2; i++) {
        left += +ticket[i];
        right += +ticket[ticket.length/2 + i];
    }
    if(right === left && ticket.length % 2 == 0) {
        return true;
    }
    return false;
}
console.log(luckCheck('62428'));