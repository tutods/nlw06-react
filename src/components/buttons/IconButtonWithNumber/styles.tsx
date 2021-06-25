import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { rgba, shade } from 'polished';
import styled from 'styled-components';

type ButtonProps = {
	modifier?: 'liked';
};

export const Button = styled.button<ButtonProps>`
	height: 30px;

	${flexSettings()};
	${flexAlignment('center')};
	gap: 5px;

	padding: 10px;
	border-radius: 999px;

	${({ modifier, theme }) => {
		if (modifier === 'liked') {
			return `
				background-color: ${theme.colors.primary};
				color: ${theme.colors.white};
			`;
		} else {
			return `
				background-color: transparent;
				color: ${theme.colors.text};
			`;
		}
	}}

	text-align: center;
	cursor: pointer;

	transition: all 0.35s ease;

	&:not(:disabled):hover {
		background-color: ${({ theme }) =>
			theme.title === 'dark'
				? rgba(theme.colors.primary, 0.25)
				: theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}

	&:disabled {
		color: ${({ theme }) =>
			theme.title === 'dark'
				? shade(0.35, theme.colors.gray[500])
				: theme.colors.gray[500]};
		cursor: not-allowed;
	}
`;
