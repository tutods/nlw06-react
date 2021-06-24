import { rgba, shade } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
	width: 30px;
	height: 30px;

	border-radius: 999px;

	background-color: transparent;
	color: ${({ theme }) => theme.colors.text};
	text-align: center;
	line-height: 0;
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
