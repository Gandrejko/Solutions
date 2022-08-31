const flip=(d, a)=>{
    if(d === 'R') a.sort((x,y) => x-y);
    if(d === 'L') a.sort((x,y) => y-x);
    return a;
}

console.log(flip('L', [3, 2, 1, 2]))