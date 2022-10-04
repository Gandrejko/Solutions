function humanReadable (seconds) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor(seconds / 60 % 60);
    const secs = Math.floor(seconds % 60);
    console.log(mins > 10);
    return `${hours > 9 ? hours : '0' + hours}:${mins > 9 ? mins : '0' + mins}:${secs > 9 ? secs : '0' + secs}`;
}

console.log(humanReadable(47444));