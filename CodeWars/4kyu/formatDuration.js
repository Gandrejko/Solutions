function formatDuration(seconds) {
    let str = '';
    const obj = {
        year: Math.floor(seconds / 31622400), 
        day: Math.floor(seconds / 86400 % 365),
        hour: Math.floor(seconds / 3600 % 24),
        minute: Math.floor(seconds / 60 % 60),
        second: Math.floor(seconds % 60)
    }
    for (const key in obj) {
        if(obj[key] !== 0) {
            str += `${obj[key]} ${obj[key] > 1 ? key + 's' : key}, `;
        }
    }
    return str.slice(0, -2).replace(/,(?=[^,]*$)/, " and") || 'now';
}

console.log(formatDuration(871263547623))