import { createContext, ReactNode } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from 'utils/hooks/useAuth';
import { database } from 'utils/services/firebase';

export type RoomContextProps = {
	saveNewQuestion: ({ question, roomId }: NewQuestionProps) => Promise<void>;
};

type RoomProviderProps = {
	children: ReactNode;
};

type NewQuestionProps = {
	roomId: string;
	question: string;
};

export const RoomContext = createContext({} as RoomContextProps);

export const RoomContextProvider = ({ children }: RoomProviderProps) => {
	const { user } = useAuth();

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
		<RoomContext.Provider value={{ saveNewQuestion }}>
			<Toaster position='top-right' reverseOrder={false} />
			{children}
		</RoomContext.Provider>
	);
};
