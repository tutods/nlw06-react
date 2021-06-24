import { createContext, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { QuestionType, VectorQuestionType } from 'utils/@types/Room';
import { generateCode } from 'utils/functions/generateCode';
import { useAuth } from 'utils/hooks/useAuth';
import { database } from 'utils/services/firebase';

type NewQuestionProps = {
	roomId: string;
	question: string;
};

type LoadQuestionsProps = {
	id: string;
	setTitle: (value: string) => void;
	setQuestions: (questions: QuestionType[]) => void;
};

export type RoomContextProps = {
	saveNewQuestion: ({ question, roomId }: NewQuestionProps) => Promise<void>;
	createNewRoom: (name: string) => Promise<string | null | undefined>;
	loadQuestions: ({
		id,
		setTitle,
		setQuestions
	}: LoadQuestionsProps) => Promise<void>;
};

type RoomProviderProps = {
	children: ReactNode;
};

export const RoomContext = createContext({} as RoomContextProps);

export const RoomContextProvider = ({ children }: RoomProviderProps) => {
	const { user } = useAuth();
	const history = useHistory();

	const createNewRoom = async (name: string) => {
		if (name.trim() === '') {
			toast.error('O nome da sala introduzido é inválido!', {
				duration: 5000
			});
			return;
		}

		const roomRef = database.ref('rooms');

		const firebaseRoom = await roomRef.push({
			title: name,
			authorId: user?.id,
			code: generateCode()
		});

		return await firebaseRoom.key;
	};

	const loadQuestions = async ({
		id,
		setTitle,
		setQuestions
	}: LoadQuestionsProps) => {
		const roomRef = database.ref(`rooms/${id}`);

		roomRef.on('value', (room) => {
			const databaseRoom = room.val();

			if (!room.exists()) {
				toast.error(`Sala com o código ${id} não existe!`, {
					duration: 5000
				});
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
	};

	const saveNewQuestion = async ({ question, roomId }: NewQuestionProps) => {
		if (!user) {
			toast.error(
				'Ocorreu um erro ao enviar a sua questão! Tente novamente mais tarde.',
				{
					duration: 5000
				}
			);
			return;
		}

		const questionToInsert = {
			content: question,
			author: {
				name: user.name,
				avatar: user.avatar
			},
			isHighlighted: false,
			isAnswered: false
		};

		await database.ref(`rooms/${roomId}/questions`).push(questionToInsert);
	};

	return (
		<RoomContext.Provider
			value={{ createNewRoom, loadQuestions, saveNewQuestion }}
		>
			{children}
		</RoomContext.Provider>
	);
};
