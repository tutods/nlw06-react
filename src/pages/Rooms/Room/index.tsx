import Avatar from 'components/Avatar';
import Button from 'components/buttons/Button';
import CodeButton from 'components/buttons/CodeButton';
import IconButton from 'components/buttons/IconButton';
import QuestionCard from 'components/QuestionCard';
import { ThemeSwitch } from 'components/ThemeSwitch';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { BiLike } from 'react-icons/bi';
import { IoMdPaperPlane } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { useAuth } from 'utils/hooks/useAuth';
import { useRoom } from 'utils/hooks/useRoom';
import {
	Container,
	Content,
	FormFooter,
	Header,
	Logo,
	Main,
	QuestionForm,
	QuestionList,
	RoomTitle
} from './styles';

type RoomParams = {
	id: string;
};

const Room = () => {
	// Hooks
	const { id } = useParams<RoomParams>();
	const { user } = useAuth();
	const { saveNewQuestion, questions, title } = useRoom(id);

	// States
	const [newQuestion, setNewQuestion] = useState<string>('');

	const handleSendQuestion = async (event: FormEvent) => {
		event.preventDefault();

		if (newQuestion.trim() === '') {
			toast.error('Por favor insira primeiro a sua questão!', {
				duration: 5000
			});
			return;
		}

		if (!user) {
			toast.error(
				'Por favor inicie sessão para publicar a sua questão!',
				{
					duration: 5000
				}
			);
			return;
		}

		// try {
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
			},
			{
				duration: 5000
			}
		);
		// } catch (error) {
		// 	toast.error(
		// 		'Ocorreu um erro ao enviar a sua questão! Tente novamente mais tarde.',
		// 		{
		// 			duration: 5000
		// 		}
		// 	);
		// }

		setNewQuestion('');
	};

	return (
		<Container>
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

export default Room;
