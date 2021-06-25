export type RoomType = {
	authorId: string;
	code: string;
	title: string;
	questions?: QuestionType[];
};

export type QuestionType = {
	id: string;
	author: { avatar: string; name: string };
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
	likeCount: number;
	likeId?: string;
};

export type VectorQuestionType = Record<
	string,
	{
		author: { avatar: string; name: string };
		content: string;
		isAnswered: boolean;
		isHighlighted: boolean;
		likes: Record<string, { authorId: string }>;
		likeId?: string;
	}
>;

export type VectorRoomType = Record<
	string,
	{
		authorId: string;
		code: string;
		title: string;
		questions?: QuestionType[];
	}
>;
