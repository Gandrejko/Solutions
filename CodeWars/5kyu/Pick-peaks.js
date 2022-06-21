function pickPeaks(arr){
    let obj = {
      pos: [],
      peaks: []
    };
  
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] != arr[i+1]){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {      
          obj.pos.push(i); 
          obj.peaks.push(arr[i]);     
        } 
      } else if(arr[i] === arr[i+1]) {
        let j = 1;
        while(arr[i] === arr[i+j]) {
          if(arr[i] === arr[i+j]){
            j++;
          } 
          if(arr[i] != arr[i+j]){
  
            if(arr[i] > arr[i-1] && arr[i] > arr[i+j]) {
              obj.pos.push(i); 
              obj.peaks.push(arr[i]);                 
            } 
          }        
        }     
      }  
    }
    return obj;    
}