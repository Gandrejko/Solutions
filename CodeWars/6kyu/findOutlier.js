function findOutlier(integers) {
    let isOdd = false;
    if(integers.filter(x => x % 2).length == 1) isOdd = true;
    return integers.find(x => (isOdd ? Math.abs(x % 2) === 1 : x % 2 === 0))
}

// console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([-93516160,-37647616,111678786,-124175332,-77858652,-115730844,-58282512,-88212482,-46023012,-101863283,-142279318,66790184,-59529170,132874448,-139969700,10723994,-169960740,56989052,-180960144,-189791170,105763902,-60739632,9614474,-25918738,-142734346,126871616,60578552,-172417860,-45844372,106480966,82562546,164159708,48052204,99263420,-15900548,118065882,-194897474,-105803730,-57619362,-46374988,136780022,106149458,89997038,-25144668]))
