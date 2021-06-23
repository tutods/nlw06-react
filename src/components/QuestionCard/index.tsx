import Avatar from 'components/Avatar';
import { Container, Footer, Question } from './styles';

type Props = {
	user: {
		avatar: string;
		name: string;
	};
	question: string;
};

const QuestionCard = ({ user, question, ...props }: Props) => {
	return (
		<Container {...props}>
			<Question>{question}</Question>

			<Footer>
				<Avatar avatar={user.avatar} name={user.name} />
			</Footer>
		</Container>
	);
};

export default QuestionCard;
