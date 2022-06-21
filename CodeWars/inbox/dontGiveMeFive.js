// function dontGiveMeFive(start, end){

//     let count = 0;
//     for (let i = start; i <= end; i++) {
//         if(!(i + '').includes('5')){
//             ++count;
//         }
//     }
//     console.log(count);
// }

// dontGiveMeFive(51555, 6055555555);

function dontGiveMeFive(start, end){
    let count = (end + start) / 2;
    
    console.log(count);
}

dontGiveMeFive(1, 4);


