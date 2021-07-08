const reducers = (state, action) => {
    switch (action.type) {
        case 'GET_NOTES':
            return {
                ...state,
                notes: action.payload
            }
        default:
            return state
    }
}

export default reducers