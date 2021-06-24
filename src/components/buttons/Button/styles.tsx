import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { rgba, shade, tint } from 'polished';
import styled from 'styled-components';

type ButtonContainerProps = {
	haveIcon: boolean;
	variant?: 'outline';
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
	${flexSettings()};
	${flexAlignment('center', 'center')};

	${({ haveIcon }) => haveIcon && 'gap: 10px'};

	height: 50px;

	padding: 0 32px;
	border-radius: 8px;

	${({ variant, theme }) => {
		if (variant === 'outline') {
			return `
				border: 1px solid ${theme.colors.primary};
				background-color: transparent;
				color: ${theme.colors.primary};
			`;
		} else {
			return `
				background-color: ${theme.colors.primary};
				color: ${theme.colors.white};
			`;
		}
	}}

	font-weight: 400;
	cursor: pointer;

	transition: background-color 0.35s ease;

	&:not(:disabled):hover {
		${({ variant, theme }) => {
			if (variant === 'outline') {
				return `
					background-color: ${rgba(theme.colors.primary, 0.25)};
					color: ${theme.title === 'dark' ? theme.colors.white : theme.colors.primary};
				`;
			} else {
				return `
					background-color: ${shade(0.25, theme.colors.primary)};
				`;
			}
		}}
	}

	&:disabled {
		${({ variant, theme }) => {
			if (variant === 'outline') {
				return `
					background-color: ${rgba(tint(0.25, theme.colors.primary), 0.25)};
					color: ${
						theme.title === 'light'
							? shade(0.35, theme.colors.primary)
							: shade(0.25, theme.colors.white)
					};
				`;
			} else {
				return `
					background-color: ${tint(0.25, theme.colors.primary)};
				`;
			}
		}}

		cursor: not-allowed;
	}
`;
