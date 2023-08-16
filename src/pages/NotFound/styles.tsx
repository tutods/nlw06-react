import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import Letmeask from 'components/Letmeask';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  ${flexSettings('column')};
`;

export const Title = styled.h1`
  margin-bottom: 0;
  padding-bottom: 0;

  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  font-size: 60px;
  font-family: 'Poppins', sans-serif;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;
`;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.title === 'dark' ? shade(0.5, theme.colors.gray[200]) : theme.colors.gray[200]};
`;

export const Content = styled.div`
  max-width: 1120px;

  ${flexSettings()};
  ${flexAlignment('center', 'space-between')};

  margin: 0 auto;

  div {
    ${flexSettings()};
    ${flexAlignment('center')};
    gap: 16px;

    > button {
      height: 40px;
    }
  }
`;

export const Logo = styled(Letmeask)`
  max-height: 45px;
`;

export const Main = styled.main`
  flex: 1;

  ${flexSettings('column')};
  ${flexAlignment('center', 'center')};

  > svg {
    width: 350px;
    height: auto;

    margin-bottom: 20px;
  }
`;
