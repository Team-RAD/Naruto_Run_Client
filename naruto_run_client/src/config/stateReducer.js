export default function (state, action) {
	switch (action.type) {
		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			};
		}
		case 'setNarutoPosts': {
			return {
				...state,
				narutoPosts: action.data
			};
		}
		case 'setError': {
			return {
				...state,
				error: action.data
			};
		}
		default:
			return state;
	}
}
