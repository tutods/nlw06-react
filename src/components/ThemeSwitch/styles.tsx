import { shade } from 'polished';
import styled from 'styled-components';

export const SwitchTheme = styled.button`
	width: 40px;
	height: 40px;

	border-radius: 50%;
	border: none;

	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};

	cursor: pointer;
	transition: all 0.5s ease;
	line-height: 0;

	&:focus {
		outline: none;
	}

	&:hover {
		background-color: ${({ theme }) => shade(0.25, theme.colors.primary)};
		color: ${({ theme }) => theme.colors.white};
	}
`;
