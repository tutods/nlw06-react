import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { ThemeSwitch } from 'components/ThemeSwitch';
import styled from 'styled-components';

export const Container = styled.div`
	${flexSettings()};
	${flexAlignment('stretch')};

	height: 100vh;
`;

export const Aside = styled.aside`
	flex: 4;
	${flexSettings('column')};
	${flexAlignment('flex-start', 'center')};

	padding: 120px 80px;

	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};

	img {
		max-width: 320px;
	}
`;

export const AsideTitle = styled.strong`
	margin-top: 16px;

	font: 700 36px 'Poppins', sans-serif;
	line-height: 42px;
`;

export const AsideParagraph = styled.p`
	/* margin-top: 16px; */

	color: ${({ theme }) => theme.colors.gray[200]};
	font-size: 24px;
	line-height: 32px;
`;

export const Main = styled.main`
	flex: 8;
	${flexSettings()};
	${flexAlignment('center', 'center')};

	padding: 32px;

	/* > div {
		${flexSettings('column')};
		align-items: stretch;

		width: 100%;
		max-width: 320px;

		text-align: center;
	} */
`;

export const CustomThemeSwitch = styled(ThemeSwitch)`
	position: absolute;
	top: 20px;
	right: 20px;
`;
