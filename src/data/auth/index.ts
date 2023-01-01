import { pb } from '../../config';

export const connect = async (username: string, password: string) => {
	logout();
	await pb.collection('users').authWithPassword(username, password);
	return pb.authStore.isValid;
};

export const logout = () => {
	pb.authStore.clear();
};

export const isLoggedIn = () => {
	return !!pb.authStore.token;
};
