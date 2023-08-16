import { rgba, shade } from 'polished';
import styled from 'styled-components';

type ButtonProps = {
  modifier?: 'danger';
  isActive?: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: 30px;
  height: 30px;

  border-radius: 999px;

  ${({ theme, modifier, isActive }) => {
    if (isActive && modifier === 'danger') {
      return `
				background-color: transparent;
				color: ${theme.colors.text};
			`;
    } else if (isActive) {
      return `
				background-color: ${
          theme.title === 'dark' ? rgba(theme.colors.primary, 0.25) : theme.colors.primary
        };
				color: ${theme.colors.white};
			`;
    } else {
      return `
				background-color: transparent;
				color: ${theme.colors.text};
			`;
    }
  }};

  text-align: center;
  line-height: 0;
  cursor: pointer;

  transition: all 0.35s ease;

  &:not(:disabled):hover {
    ${({ modifier, theme }) => {
      if (modifier === 'danger') {
        return `
					background-color: ${theme.colors.danger};
					color: ${theme.colors.white};
				`;
      } else {
        return `
					background-color: ${
            theme.title === 'dark' ? rgba(theme.colors.primary, 0.25) : theme.colors.primary
          };
					color: ${theme.colors.white};
				`;
      }
    }}
  }

  &:disabled {
    color: ${({ theme }) =>
      theme.title === 'dark' ? shade(0.35, theme.colors.gray[500]) : theme.colors.gray[500]};
    cursor: not-allowed;
  }
`;
