import Button from 'components/buttons/Button';
import CodeButton from 'components/buttons/CodeButton';
import IconButton from 'components/buttons/IconButton';
import QuestionCard from 'components/QuestionCard';
import { ThemeSwitch } from 'components/ThemeSwitch';
import toast from 'react-hot-toast';
import { BiCheckCircle, BiMessage, BiTrash } from 'react-icons/bi';
import { useHistory, useParams } from 'react-router-dom';
import { useRoom } from 'utils/hooks/useRoom';
import { database } from 'utils/services/firebase';
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
	const history = useHistory();

	const handleDeleteQuestion = async (questionId: string) => {
		if (window.confirm('Tem certeze que deseja excluir esta pergunta?')) {
			try {
				await database
					.ref(`rooms/${id}/questions/${questionId}`)
					.remove();

				toast.success('Questão removida com sucesso', {
					duration: 5000
				});
			} catch (error) {
				toast.error('Ocorreu um erro a remover a pergunta desejada!', {
					duration: 5000
				});
			}
		}
	};

	const handleCloseRoom = async () => {
		if (window.confirm('Tem certeza que quer encerrar esta sala?')) {
			try {
				await database.ref(`rooms/${id}`).update({
					closedAt: new Date()
				});

				toast.success('Sala encerrada com sucesso', {
					duration: 5000
				});

				history.push('/');
			} catch (error) {
				toast.error('Ocorreu um erro a encerrar esta sala!', {
					duration: 5000
				});
			}
		}
	};

	return (
		<Container>
			<Header>
				<Content>
					<Logo />

					<div>
						<ThemeSwitch />

						<CodeButton code={id} />

						<Button onClick={handleCloseRoom} modifier={'outline'}>
							Encerrar Sala
						</Button>
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
							<IconButton aria-label='Marcar como resolvido'>
								<BiCheckCircle />
							</IconButton>

							<IconButton aria-label='Marcar como respondido'>
								<BiMessage />
							</IconButton>

							<IconButton
								onClick={() =>
									handleDeleteQuestion(question.id)
								}
								aria-label='Apagar Questão'
								modifier={'danger'}
							>
								<BiTrash />
							</IconButton>
						</QuestionCard>
					))}
				</QuestionList>
			</Main>
		</Container>
	);
};

export default AdminRoom;
