import crypto from 'crypto';

const generateCode = () => {
	const hashCreated = crypto
		.createHash('md5')
		.update(Date.now().toString())
		.digest('hex');

	let code = '';

	for (var i = 0; i < 5; i++) {
		code += hashCreated.charAt(
			Math.floor(Math.random() * hashCreated.length)
		);
	}

	return code;
};

export { generateCode };
