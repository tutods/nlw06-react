export type RoomType = {
	authorId: string;
	code: string;
	title: string;
	questions?: QuestionType[];
};

export type QuestionType = {
	id?: string;
	author: { avatar: string; name: string };
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
};

export type VectorQuestionType = Record<
	string,
	{
		author: { avatar: string; name: string };
		content: string;
		isAnswered: boolean;
		isHighlighted: boolean;
	}
>;
