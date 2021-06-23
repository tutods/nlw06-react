import { createContext, ReactNode } from 'react';
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
			{children}
		</RoomContext.Provider>
	);
};
