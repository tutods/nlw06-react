import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
  ${flexSettings()};
  ${flexAlignment('center')};
  color: ${({ theme }) => theme.colors.white};

  gap: 10px;
`;

export const AvatarContainer = styled.div`
  width: 32px;
  height: 32px;

  ${flexSettings()};
  ${flexAlignment('center', 'center')};

  border-radius: 100%;

  background-color: ${({ theme }) => theme.colors.primary};

  > svg {
    font-size: 20px;
  }
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;

  border-radius: 100%;
`;

export const Name = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;
