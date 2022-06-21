function cakes(recipe, ingredients){
    let arr = [1000];
    let k = 0;
    for(let i = 0; i < Object.keys(recipe).length; i++) {
      k = 0;
      for(let j = 0; j < Object.keys(ingredients).length; j++){
        if(Object.keys(ingredients)[j] === Object.keys(recipe)[i]){
          for(let e = Object.values(recipe)[i]; e <= Object.values(ingredients)[j]; e = e + Object.values(recipe)[i]) k++;
        }
      } 
      if(k < arr[0]){
        arr.shift(0);
        arr.push(k);
      }     
    }  
    return arr[0];  
}