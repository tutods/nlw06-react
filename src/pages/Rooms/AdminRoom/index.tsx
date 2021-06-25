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
	Description,
	Header,
	Logo,
	Main,
	NoQuestions,
	QuestionList,
	RoomTitle,
	Title
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

	const handleCheckQuestionAsAnswered = async (questionId: string) => {
		try {
			await database.ref(`rooms/${id}/questions/${questionId}`).update({
				isAnswered: true
			});

			toast.success('Questão marcada como respondida!', {
				duration: 5000
			});
		} catch (error) {
			toast.error(
				'Ocorreu um erro a marcar a pergunta desejada como respondida!',
				{
					duration: 5000
				}
			);
		}
	};

	const handleHighlightQuestion = async (questionId: string) => {
		try {
			await database.ref(`rooms/${id}/questions/${questionId}`).update({
				isHighlighted: true
			});

			toast.success('Questão destacada com sucesso!', {
				duration: 5000
			});
		} catch (error) {
			toast.error('Ocorreu um erro a destacar a pergunta desejada!', {
				duration: 5000
			});
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
							isHighlighted={question.isHighlighted}
							isAnswered={question.isAnswered}
						>
							{!question.isAnswered && (
								<>
									<IconButton
										onClick={() =>
											handleCheckQuestionAsAnswered(
												question.id
											)
										}
										isActive={question.isAnswered}
										aria-label='Marcar como respondida'
									>
										<BiCheckCircle />
									</IconButton>

									<IconButton
										onClick={() =>
											handleHighlightQuestion(question.id)
										}
										isActive={question.isHighlighted}
										aria-label='Marcar como destacada'
									>
										<BiMessage />
									</IconButton>
								</>
							)}

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

				{questions.length === 0 && (
					<NoQuestions>
						<svg viewBox='0 0 150 150' fill='none'>
							<circle
								opacity='0.1'
								cx='75'
								cy='75'
								r='75'
								fill='#835AFD'
							/>
							<path
								d='M9 29.7229V62.7836V65.145C9 67.7534 11.1145 69.868 13.7229 69.868H44.4221L57.0363 81.5118C57.883 82.2934 59.2331 81.5235 58.9917 80.3968L56.2295 67.5065H64.4946C67.103 67.5065 69.2175 65.392 69.2175 62.7836V29.7229C69.2175 27.1145 67.103 25 64.4946 25H13.7229C11.1145 25 9 27.1145 9 29.7229Z'
								fill='#835AFD'
							/>
							<path
								d='M149.218 57.7229V90.7836V93.145C149.218 95.7534 147.103 97.868 144.495 97.868H113.795L101.181 109.512C100.335 110.293 98.9844 109.524 99.2259 108.397L101.988 95.5065H93.7229C91.1145 95.5065 89 93.392 89 90.7836V57.7229C89 55.1145 91.1145 53 93.7229 53H144.495C147.103 53 149.218 55.1145 149.218 57.7229Z'
								fill='#E559F9'
							/>
							<path
								d='M42 101.41V118.281V119.486C42 120.817 43.0886 121.896 44.4314 121.896H60.2353L66.7291 127.838C67.1649 128.237 67.86 127.844 67.7357 127.269L66.3137 120.691H70.5686C71.9114 120.691 73 119.612 73 118.281V101.41C73 100.079 71.9114 99 70.5686 99H44.4314C43.0886 99 42 100.079 42 101.41Z'
								fill='#D67EE2'
							/>
							<circle
								cx='25.5'
								cy='46.5'
								r='3.5'
								fill='#FEFEFE'
							/>
							<circle
								cx='38.5'
								cy='46.5'
								r='3.5'
								fill='#FEFEFE'
							/>
							<circle
								cx='51.5'
								cy='46.5'
								r='3.5'
								fill='#FEFEFE'
							/>
						</svg>

						<Title>Nenhuma pergunta por aqui...</Title>
						<Description>
							Envie o código desta sala para seus amigos e comece
							a responder perguntas!
						</Description>
					</NoQuestions>
				)}
			</Main>
		</Container>
	);
};

export default AdminRoom;
