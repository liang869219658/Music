export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';

export function saveUser(user) {
	return { type: SAVE_USER ,user};
}

export function deleteUser() {
	return { type: DELETE_USER };
}
