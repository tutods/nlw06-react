import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { shade, tint } from 'polished';
import styled from 'styled-components';

type ButtonContainerProps = {
	haveIcon: boolean;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
	${flexSettings()};
	${flexAlignment('center', 'center')};

	${({ haveIcon }) => haveIcon && 'gap: 10px'};

	height: 50px;

	padding: 0 32px;
	border-radius: 8px;

	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	font-weight: 400;
	cursor: pointer;

	transition: background-color 0.35s ease;

	&:not(:disabled):hover {
		background-color: ${({ theme }) => shade(0.25, theme.colors.primary)};
	}

	&:disabled {
		background-color: ${({ theme }) => tint(0.25, theme.colors.primary)};
		cursor: not-allowed;
	}
`;
