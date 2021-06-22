import { flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	${flexSettings('column')};
	align-items: stretch;

	width: 100%;
	max-width: 320px;

	text-align: center;
`;

export const MainTitle = styled.h2`
	margin: 64px 0 24px;

	font-size: 24px;
	font-family: 'Poppins', sans-serif;
`;

export const NewRoomForm = styled.form`
	padding: 0;
	margin: 0;

	${flexSettings('column')}

	> * {
		width: 100%;
	}

	input {
		height: 50px;

		border-radius: 8px;
		padding: 0 16px;
		border: 1px solid ${({ theme }) => theme.colors.gray[500]};

		background-color: ${({ theme }) => theme.colors.boxBackground};
		color: ${({ theme }) => theme.colors.gray[500]};
	}

	button {
		margin-top: 16px;
	}
`;

export const BottomParagraph = styled.p`
	margin-top: 16px;

	font-size: 14px;
	color: ${({ theme }) =>
		theme.title === 'light'
			? theme.colors.gray[500]
			: theme.colors.gray[100]};

	> a {
		text-decoration: underline;
	}
`;
