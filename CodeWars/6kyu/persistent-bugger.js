function persistence(num) {
	let result = 0;
	function recursion(num) {
		if(num < 10) return;
		const newNum = num.toString().split('').map(Number).reduce((a, b) => a * b);
		result++;
		recursion(newNum);
	}
	recursion(num);

	return result;
}