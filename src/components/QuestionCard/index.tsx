import Avatar from 'components/Avatar';
import { ReactNode } from 'react';
import { Actions, Container, Footer, Question } from './styles';

type Props = {
	user: {
		avatar: string;
		name: string;
	};
	question: string;
	children: ReactNode;
};

const QuestionCard = ({ user, question, children, ...props }: Props) => {
	return (
		<Container {...props}>
			<Question>{question}</Question>

			<Footer>
				<Avatar avatar={user.avatar} name={user.name} />

				<Actions>{children}</Actions>
			</Footer>
		</Container>
	);
};

export default QuestionCard;
