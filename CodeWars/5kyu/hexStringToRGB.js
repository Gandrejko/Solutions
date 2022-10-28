function hexStringToRGB(hexString) {
    const arr = [hexString.slice(1, 3), hexString.slice(3, 5), hexString.slice(5, 7)];

    return {
        r: parseInt(arr[0], 16),
        g: parseInt(arr[1], 16),
        b: parseInt(arr[2], 16)
    }
}

console.log(hexStringToRGB("#FF9933"))