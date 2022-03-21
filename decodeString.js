/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
	const countStack = [];
	const decodedStringStack = [];
	let currString = '';
	let currNum = 0;
	for (let i = 0; i < s.length; i++) {
		const letter = s[i];

		if (isDigit(letter)) {
			currNum = currNum * 10 + parseInt(letter);
		}

		if (isChar(letter)) {
			currString += letter;
		}

		if (letter === '[') {
			countStack.push(currNum);
			decodedStringStack.push(currString);
			currNum = 0;
			currString = '';
		}

		if (letter === ']') {
			let decodedString = decodedStringStack.pop();
			const count = countStack.pop();
			for (let i = 0; i < count; i++) {
				decodedString += currString;
			}
			currString = decodedString;
		}
	}

	return currString;
};

const isDigit = (letter) => /[0-9]/.test(letter);

const isChar = (letter) => /[a-z]/.test(letter);
