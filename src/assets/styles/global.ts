import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.text};
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		text-decoration: none;
	}

	body, input, button, textarea {
		font: 400 16px 'Roboto', sans-serif;
	}

	h1,h2,h3,h4,h5,h6 {
		font-family: 'Poppins', sans-serif;
	}

	input, a, button, textarea {
		box-shadow: none;
		border: 0;
	}

	a {
		color: ${({ theme }) => theme.colors.link}
	}
`;
