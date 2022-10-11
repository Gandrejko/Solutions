function replicate(times, number) {
    return times > 0 ? [number].concat(replicate(times - 1, number)) : []
}
console.log(replicate(3,5))