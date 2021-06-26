import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import Letmeask from 'components/Letmeask';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	${flexSettings('column')};

	overflow: hidden;
`;

export const Header = styled.header`
	max-height: 80px;
	height: 100%;

	${flexSettings()};

	border-bottom: 1px solid
		${({ theme }) =>
			theme.title === 'dark'
				? shade(0.5, theme.colors.gray[200])
				: theme.colors.gray[200]};
`;

export const Content = styled.div`
	max-width: 1120px;
	width: 100%;
	height: 80px;

	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	padding: 16px 0;
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;

	div {
		${flexSettings()};
		${flexAlignment('center')};
		gap: 10px;
	}
`;

export const Logo = styled(Letmeask)`
	max-height: 45px;
`;

export const Main = styled.main`
	flex: 1;

	max-width: 800px;
	width: 100%;
	height: calc(100vh - 80px);

	${flexSettings('column')};

	margin: 0 auto;
`;
export const RoomTitle = styled.div`
	margin: 32px 0 24px;
	${flexSettings()};
	${flexAlignment('center')}

	> h1 {
		font-family: 'Poppins', sans-serif;
		font-size: 24px;

		color: ${({ theme }) => theme.colors.text};
	}

	> span {
		padding: 8px 16px;
		margin-left: 16px;
		border-radius: 999px;

		background-color: ${({ theme }) => theme.colors.link};
		color: ${({ theme }) => theme.colors.white};
		font-size: 14px;
		font-weight: 500;
	}
`;

export const QuestionList = styled.section`
	flex: 1;

	margin-top: 50px;
	padding-bottom: 10px;

	${flexSettings('column')};
	gap: 10px;

	overflow-y: scroll;
`;

export const NoQuestions = styled.section`
	${flexSettings('column')};
	${flexAlignment('center', 'center')};
	flex: 1;

	margin: 0 auto;

	> svg {
		width: 350px;

		margin-bottom: 30px;
	}
`;

export const Title = styled.h1`
	margin-bottom: 10px;

	color: ${({ theme }) => theme.colors.text};
	font-family: 'Poppins', sans-serif;
	font-size: 30px;
	font-weight: 300;
	text-align: center;
`;

export const Description = styled.p`
	color: ${({ theme }) => theme.colors.gray[500]};
	font-weight: 300;
	font-size: 20px;
	text-align: center;
	line-height: 1.5;
`;
