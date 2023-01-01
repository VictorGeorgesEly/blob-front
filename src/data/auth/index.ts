import { pb } from '../../config';

export const connect = async (username: string, password: string) => {
	logout();
	const authData = await pb
		.collection('users')
		.authWithPassword(username, password);
	// TODO Delete
	console.log(pb.authStore.isValid);
	console.log(pb.authStore.token);
	console.log(pb.authStore.model?.id);

	return authData;
};

export const logout = () => {
	pb.authStore.clear();
};

export const isLoggedIn = () => {
	return !!pb.authStore.token;
};
