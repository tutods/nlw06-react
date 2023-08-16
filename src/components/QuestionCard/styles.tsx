import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { rgba, shade, tint } from 'polished';
import styled from 'styled-components';

type ContainerProps = {
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export const Container = styled.div<ContainerProps>`
  min-height: 150px;

  ${flexSettings('column')};
  gap: 20px;

  padding: 24px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.default};

  background-color: ${({ theme }) => theme.colors.boxBackground};

  ${({ theme, isHighlighted, isAnswered }) => {
    if (isAnswered) {
      return `
				background-color: ${
          theme.title === 'light'
            ? shade(0.05, theme.colors.gray[200])
            : tint(0.15, theme.colors.boxBackground)
        };
			`;
    }

    if (isHighlighted) {
      return `
				background-color: ${rgba(theme.colors.primary, 0.15)};
				border: 1px solid ${theme.colors.primary};
			`;
    }
  }}
`;

export const Question = styled.p`
  flex: 1;

  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

export const Footer = styled.footer`
  ${flexSettings()};
  ${flexAlignment('center', 'space-between')};

  justify-self: flex-end;
`;

export const Actions = styled.div`
  ${flexSettings()};
  ${flexAlignment('center')};
  gap: 5px;
`;
