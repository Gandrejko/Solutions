function scramble(str1, str2) {
  const acc = {}

  for (const char of str1) {
    acc[char] = (acc[char] ?? 0) + 1
  }

  for (const char of str2) {
    acc[char] = (acc[char] ?? 0) - 1
    if (acc[char] < 0) {
      return false
    }
  }
  return true
}

console.log(scramble('dlrow', 'world'));