interface LoginAcion {
	type: 'LOGIN';
	username: string;
}

interface LogotAcion {
	type: 'LOGOUT';
}

export type AuthAction = LoginAcion | LogotAcion;

const authReducer = (state: string, action: AuthAction): string => {
	switch (action.type) {
		case 'LOGIN':
			return action.username;
		case 'LOGOUT':
			return '';
		default:
			return state;
	}
};

export default authReducer;
