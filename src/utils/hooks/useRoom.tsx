import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { QuestionType, VectorQuestionType } from 'utils/@types/Room';
import { generateCode } from 'utils/functions/generateCode';
import { database } from 'utils/services/firebase';
import { useAuth } from './useAuth';

type NewQuestionProps = {
	roomId: string;
	question: string;
};

// type LoadQuestionsProps = {
// 	id: string;
// setTitle: (value: string) => void;
// setQuestions: (questions: QuestionType[]) => void;
// };

type RoomHookProps = {
	saveNewQuestion: ({ question, roomId }: NewQuestionProps) => Promise<void>;
	createNewRoom: (name: string) => Promise<string | null | undefined>;
	questions: QuestionType[];
	title: string;
};

export const useRoom = (id?: string): RoomHookProps => {
	// const context = useContext(RoomContext);

	// return context;

	const [questions, setQuestions] = useState<QuestionType[]>([]);
	const [title, setTitle] = useState('');

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

	// const loadQuestions = async ({ id }: LoadQuestionsProps) => {
	// 	console.log('Vamos!!');

	// 	const roomRef = database.ref(`rooms/${id}`);

	// 	roomRef.on('value', (room) => {
	// 		const databaseRoom = room.val();

	// 		if (!room.exists()) {
	// 			toast.error(`Sala com o código ${id} não existe!`, {
	// 				duration: 5000
	// 			});
	// 			history.push('/');

	// 			return;
	// 		}

	// 		const firebaseQuestions: VectorQuestionType =
	// 			databaseRoom.questions ?? {};

	// 		const parsedQuestions = Object.entries(firebaseQuestions).map(
	// 			([key, value]) => {
	// 				return {
	// 					id: key,
	// 					content: value.content,
	// 					author: value.author,
	// 					isHighlighted: value.isHighlighted,
	// 					isAnswered: value.isAnswered
	// 				};
	// 			}
	// 		);

	// 		setTitle(databaseRoom.title);
	// 		setQuestions(parsedQuestions);
	// 	});
	// };

	useEffect(() => {
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
	}, [id, history]);

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

	return { saveNewQuestion, questions, title, createNewRoom };
};
