import Avatar from 'components/Avatar';
import Button from 'components/buttons/Button';
import CodeButton from 'components/buttons/CodeButton';
import QuestionCard from 'components/QuestionCard';
import { ThemeSwitch } from 'components/ThemeSwitch';
import { FormEvent, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoMdPaperPlane } from 'react-icons/io';
import { useHistory, useParams } from 'react-router-dom';
import { QuestionType, VectorQuestionType } from 'utils/@types/Room';
import { useAuth } from 'utils/hooks/useAuth';
import { useRoom } from 'utils/hooks/useRoom';
import { database } from 'utils/services/firebase';
import {
	Container,
	Content,
	FormFooter,
	Header,
	Logo,
	Main,
	QuestionForm,
	QuestionsList,
	RoomTitle
} from './styles';

type RoomParams = {
	id: string;
};

const Room = () => {
	const { id } = useParams<RoomParams>();
	const { user } = useAuth();
	const { saveNewQuestion } = useRoom();
	const history = useHistory();

	const [questions, setQuestions] = useState<QuestionType[]>([]);
	const [title, setTitle] = useState('');

	const [newQuestion, setNewQuestion] = useState<string>('');

	useEffect(() => {
		const roomRef = database.ref(`rooms/${id}`);

		roomRef.on('value', (room) => {
			const databaseRoom = room.val();

			if (!room.exists()) {
				toast.error(`Sala com o código ${id} não existe!`);
				history.push('/');

				return;
			}

			const firebaseQuestions: VectorQuestionType =
				databaseRoom.questions ?? {};

			const parsedQuestions = Object.entries(firebaseQuestions).map(
				([key, value]) => {
					return {
						id: key,
						content: value.content,
						author: value.author,
						isHighlighted: value.isHighlighted,
						isAnswered: value.isAnswered
					};
				}
			);

			setTitle(databaseRoom.title);
			setQuestions(parsedQuestions);
		});
	}, [id, history]);

	const handleSendQuestion = async (event: FormEvent) => {
		event.preventDefault();

		if (newQuestion.trim() === '') {
			toast.error('Por favor insira primeiro a sua questão!');
			return;
		}

		if (!user) {
			toast.error('Por favor inicie sessão para publicar a sua questão!');
			return;
		}

		try {
			toast.promise(
				saveNewQuestion({ question: newQuestion, roomId: id }),
				{
					loading: 'A guardar a sua questão...',
					success: (
						<div>
							A sua questão foi <b>gravada com sucesso!</b>
						</div>
					),
					error: <b>Ocorreu um erro ao gravar a sua questão.</b>
				}
			);
		} catch (error) {
			toast.error(
				'Ocorreu um erro ao enviar a sua questão! Tente novamente mais tarde.'
			);
		}

		setNewQuestion('');
	};

	return (
		<Container>
			<Toaster position='top-right' reverseOrder={false} />

			<Header>
				<Content>
					<Logo />

					<div>
						<ThemeSwitch />

						<CodeButton code={id} />
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

				<QuestionForm onSubmit={handleSendQuestion}>
					<textarea
						placeholder='O que deseja perguntar?'
						value={newQuestion}
						onChange={(event) => setNewQuestion(event.target.value)}
					/>
					<FormFooter>
						{!user ? (
							<span>
								Para enviar uma pergunta,{' '}
								<button>faça seu login</button>
							</span>
						) : (
							<Avatar name={user.name} avatar={user.avatar} />
						)}

						<Button
							disabled={!user}
							type='submit'
							icon={<IoMdPaperPlane />}
						>
							Enviar
						</Button>
					</FormFooter>
				</QuestionForm>

				<QuestionsList>
					{questions.map((question) => (
						<QuestionCard
							key={question.id}
							question={question.content}
							user={question.author}
						/>
					))}
				</QuestionsList>
			</Main>
		</Container>
	);
};

export default Room;
