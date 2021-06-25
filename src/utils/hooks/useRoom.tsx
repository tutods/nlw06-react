import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { QuestionType, VectorQuestionType } from 'utils/@types/Room';
import { database } from 'utils/services/firebase';
import { useAuth } from './useAuth';

type NewQuestionProps = {
	roomId: string;
	question: string;
};

type RoomHookProps = {
	saveNewQuestion: ({ question, roomId }: NewQuestionProps) => Promise<void>;
	questions: QuestionType[];
	title: string;
};

export const useRoom = (id?: string): RoomHookProps => {
	const [questions, setQuestions] = useState<QuestionType[]>([]);
	const [title, setTitle] = useState('');

	const { user } = useAuth();
	const history = useHistory();

	useEffect(() => {
		const roomRef = database.ref(`rooms/${id}`);

		roomRef.on('value', (room) => {
			const databaseRoom = room.val();

			if (!room.exists() || databaseRoom.closedAt) {
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
						isAnswered: value.isAnswered,
						likeCount: Object.values(value.likes ?? {}).length,
						likeId: Object.entries(value.likes ?? {}).find(
							([key, like]) => like.authorId === user?.id
						)?.[0]
					};
				}
			);

			setTitle(databaseRoom.title);
			setQuestions(parsedQuestions);
		});

		return () => {
			roomRef.off();
		};
	}, [id, history, user?.id]);

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

	return { saveNewQuestion, questions, title };
};
