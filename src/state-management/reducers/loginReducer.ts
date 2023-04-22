interface LoginAcion {
	type: 'LOGIN';
	username: string;
}

interface LogotAcion {
	type: 'LOGOUT';
}

type AuthAcion = LoginAcion | LogotAcion;

const authReducer = (state: string, action: AuthAcion): string => {
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
