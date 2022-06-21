function listSquared(m, n) {
    let result = [];
    for(m; m <= n; m++) {
      let res = [m,[]];
      let sum = 0;
      for (let i = 1; i <= m; i++) {      
  
        if(m%i === 0) {
          res[1].push(i);
        }      
      }
      res[1].forEach(e => {
        sum += Math.pow(e, 2);
      });
      if(Math.sqrt(sum)%10 === Math.round(Math.sqrt(sum)%10)){
        result.push([m, sum]);
      }
    }
    return result;
  }