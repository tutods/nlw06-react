export const flexSettings = (direction = 'row') => {
	return `
		display: flex;

		${direction && `flex-direction: ${direction}`};
	`;
};

export const flexAlignment = (align = 'center', justify = 'flex-start') => {
	return `
		align-items: ${align};

		${justify && `justify-content: ${justify}`};
	`;
};

export const coverBg = () => {
	return `
		background-repeat: no-repeat
		background-size: cover
		background-position: center
	`;
};
