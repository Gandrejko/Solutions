function solution(str){
    if(str.slice(0, 2).length === 0) return []
    return str.slice(2).length > 0 ? [str.slice(0, 2)].concat(solution(str.slice(2))) : (str.slice(0, 2).length === 1 ? [str.slice(0, 2) + '_'] : [str.slice(0, 2)] || []) 
 }
 

console.log(solution("sadfsaf"))