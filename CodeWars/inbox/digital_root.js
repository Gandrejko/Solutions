function digital_root(n) {
    function loop(x){
        let result = 0;
        if(x > 10) {
            for (let i = 0; i < x.toString().length; i++) {
                result += +x.toString()[i];
            }           
        } else{
            loop(result);
        }
        
    }
    loop(n);
    console.log(result);
}

digital_root(456);