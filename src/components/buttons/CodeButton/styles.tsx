import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 40px;

  ${flexSettings()};
  ${flexAlignment('center')};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  background-color: ${({ theme }) => theme.colors.boxBackground};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  cursor: pointer;

  span {
    width: 230px;

    display: block;

    flex: 1;
    align-self: center;

    padding: 0 16px 0 12px;

    font-size: 14px;
    font-weight: 500;
  }

  transition: all 0.35s ease;
`;

export const IconContainer = styled.div`
  height: 100%;

  ${flexSettings()};
  ${flexAlignment('center', 'center')};

  padding: 0 12px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;
