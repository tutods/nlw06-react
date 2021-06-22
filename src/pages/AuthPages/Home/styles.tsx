import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	${flexSettings('column')};
	align-items: stretch;

	width: 100%;
	max-width: 320px;

	text-align: center;
`;

export const RoomButton = styled.button`
	${flexSettings()};
	${flexAlignment('center', 'center')};
	gap: 10px;

	height: 50px;

	margin-top: 64px;
	border-radius: 8px;

	background-color: ${({ theme }) => theme.colors.google};
	color: ${({ theme }) => theme.colors.white};
	font-weight: 400;
	cursor: pointer;

	transition: background-color 0.35s ease;

	&:hover {
		background-color: ${({ theme }) => shade(0.25, theme.colors.google)};
	}
`;

export const Divider = styled.div`
	${flexSettings()};
	${flexAlignment('center')};

	margin: 32px 0;

	font-size: 14px;
	color: ${({ theme }) =>
		theme.title === 'light'
			? theme.colors.gray[500]
			: theme.colors.gray[200]};

	&::before {
		content: '';
		flex: 1;
		height: 1px;
		margin-right: 16px;
		background: ${({ theme }) =>
			theme.title === 'light'
				? theme.colors.gray[500]
				: theme.colors.gray[200]};
	}

	&::after {
		content: '';
		flex: 1;
		height: 1px;
		margin-left: 16px;
		background: ${({ theme }) =>
			theme.title === 'light'
				? theme.colors.gray[500]
				: theme.colors.gray[200]};
	}
`;

export const EnterForm = styled.form`
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
