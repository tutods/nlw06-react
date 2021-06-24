import Button from 'components/buttons/Button';
import CodeButton from 'components/buttons/CodeButton';
import IconButton from 'components/buttons/IconButton';
import QuestionCard from 'components/QuestionCard';
import { ThemeSwitch } from 'components/ThemeSwitch';
import { BiLike } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useRoom } from 'utils/hooks/useRoom';
import {
	Container,
	Content,
	Header,
	Logo,
	Main,
	QuestionList,
	RoomTitle
} from './styles';

type AdminRoomParams = {
	id: string;
};

const AdminRoom = () => {
	// Hooks
	const { id } = useParams<AdminRoomParams>();
	const { questions, title } = useRoom(id);

	return (
		<Container>
			<Header>
				<Content>
					<Logo />

					<div>
						<ThemeSwitch />

						<CodeButton code={id} />

						<Button variant={'outline'}>Encerrar Sala</Button>
					</div>
				</Content>
			</Header>

			<Main>
				<RoomTitle>
					<h1>Sala {title}</h1>
					{questions.length > 0 && (
						<span>{questions.length} pergunta(s)</span>
					)}
				</RoomTitle>

				<QuestionList>
					{questions.map((question) => (
						<QuestionCard
							key={question.id}
							question={question.content}
							user={question.author}
						>
							<IconButton>
								<BiLike />
							</IconButton>
						</QuestionCard>
					))}
				</QuestionList>
			</Main>
		</Container>
	);
};

export default AdminRoom;
