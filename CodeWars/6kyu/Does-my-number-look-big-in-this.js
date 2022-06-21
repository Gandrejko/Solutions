function narcissistic(value) {
    let str = value + '';
    let num = 0;
    for(let i = 0; i < str.length; i++) {
      num += Math.pow(+str[i], str.length);
    }
    return num == value ? true : false;
    
  }