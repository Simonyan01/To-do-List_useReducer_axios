const Reducer = (state, action) => {
    if (action.type === "GET_TODOS") {
        return action.payload
    } else if (action.type === "ADD_TODO") {
        return [{
            id: Math.random(),
            text: action.payload.text,
            isCompleted: false
        }, ...state]
    } else if (action.type === "CHECK_TODO") {
        return state.map((todo) => {
            if (todo.id === action.payload.id) {
                return action.payload
            } else {
                return todo;
            }
        })
    } else if (action.type === "DELETE_TODO") {
        return state.filter(prev => prev.id === action.payload.id)
    } else if (action.type === "CLEAR_COMPLETED") {
        return state.filter((todo) => !todo.isCompleted)
    }
    return state
}

export default Reducer