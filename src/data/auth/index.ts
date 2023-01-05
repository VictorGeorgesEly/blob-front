import { pb } from '../../config';
import { AnswerData, ConnectionData, CorrectAnswer } from './type';

export async function login(
	ConnectionData: ConnectionData,
): Promise<CorrectAnswer<AnswerData> | { error?: string }> {
	try {
		const response = await pb
			.collection('users')
			.authWithPassword<AnswerData>(
				ConnectionData.identity,
				ConnectionData.password,
			);
		return response;
	} catch (error) {
		return { error: 'Erreur lors de la connexion au serveur' };
	}
}

export const logout = () => {
	pb.authStore.clear();
};

export const isLoggedIn = () => {
	return !!pb.authStore.token;
};
