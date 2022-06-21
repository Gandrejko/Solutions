function numberOfPairs(gloves){
    let set = new Set();
    const array = []
    gloves.forEach(e => {
        const count = 0;
        if(set.has(e)){

        } else{
            set.add(e);
        }
    });
    console.log(set);
}

numberOfPairs(["red", "green", "red", "blue", "blue"]);