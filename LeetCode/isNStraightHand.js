var isNStraightHand = function(hand, groupSize) {
    let res;
    if(hand.length%groupSize === 0 && (hand.sort((a,b) => a-b)).pop() - (hand.sort((a,b) => a-b)).shift() + 1 <= groupSize){
         res = true;       
    } else{
        res = false;
    }
    console.log("res", res);
};
isNStraightHand([1,2,3,4,5,6], 3)