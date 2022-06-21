function countSmileys(arr) {
    let i = 0;
        arr.forEach(item => {
        if(item.length == 2){
            if((item[0] == ':' || item[0] == ';') && (item[1] == ')' || item[1] == 'D')){
            i++;
            }
        } else {
            if((item[0] == ':' || item[0] == ';') && (item[1] == '-' || item[1] == '~') && (item[2] == ')' || item[2] == 'D')){
            i++;
            }
        }
        
        });
    return i;
}