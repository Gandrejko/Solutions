function luckCheck(ticket){
    let left = 0;
    let right = 0;
    for (let i = 0; i < ticket.length/2; i++) {
        left += +ticket[i];
        right += +ticket[ticket.length/2 + i];
    }
    if(right === left) {
        return true;
    }
    return false;
}
console.log(luckCheck('683179'));