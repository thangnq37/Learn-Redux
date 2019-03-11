var valueRoot = 0;

export default (state = valueRoot, action)=> {
	switch (action.type) {
	case 'INCREMENT':
	  	return state + 1
	case 'DECREMENT':
	  	return state - 1
	default:
	  	return state
	}
}