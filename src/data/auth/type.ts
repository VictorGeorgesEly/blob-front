export type ConnectionData = {
	identity: string;
	password: string;
};

export type CorrectAnswer<T> = {
	token: string;
	error?: string;
	record: T;
};

export type AnswerData = {
	id: string;
	collectionID: string;
	collectionName: string;
	created: Date;
	updated: Date;
	username: string;
	verified: boolean;
	emailVisibility: boolean;
	email: string;
	avatar: string;
	first_name: string;
	last_name: string;
	birthday: Date;
};
