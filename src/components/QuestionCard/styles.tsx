import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	min-height: 150px;

	${flexSettings('column')};
	gap: 20px;

	padding: 24px;
	border-radius: 8px;
	box-shadow: ${({ theme }) => theme.shadows.default};

	background-color: ${({ theme }) => theme.colors.boxBackground};
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
	gap: 10px;
`;
