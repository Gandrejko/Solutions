function sumPairs(ints, s){
    let intSet = new Set();
    intSet.add(ints[0]);
    for (let i = 1; i < ints.length; ++i){
      let needed = s - ints[i];
      if (intSet.has(needed)){
        return [needed,ints[i]];
      }
      intSet.add(ints[i]);
    }
    return undefined;
}