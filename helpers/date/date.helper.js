
// Date pattern: DDMMYYYY_HHMMSS
exports.datetime = () => {
	const date = new Date();
    return `${('0' + date.getDate()).slice(-2)}${('0' + (date.getMonth() + 1)).slice(-2)}${date.getFullYear()}_${('0' + date.getHours()).slice(-2)}${('0' + date.getMinutes()).slice(-2)}${('0' + date.getSeconds()).slice(-2)}`;
};

// Date pattern: DDMMYYYY
exports.date = () => {
	const date = new Date();
    return `${('0' + date.getDate()).slice(-2)}${('0' + (date.getMonth() + 1)).slice(-2)}${date.getFullYear()}`;
};