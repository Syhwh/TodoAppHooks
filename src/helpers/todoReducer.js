
export const toDoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload]
		case 'delete':
			return state.filter(({ id }) => id !== action.payload)
		case 'status':
			return state.map(todo => (todo.id === action.payload)
				? { ...todo, status: !todo.status }
				: todo)
		default:
			return state
	}
}