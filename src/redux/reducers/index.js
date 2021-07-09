const reducers = (state, action) => {
    switch (action.type) {
        case 'GET_NOTES':
            return {
                ...state,
                notes: action.payload
            }
        case 'SET_NAV':
            return{
                ...state,
                nav: !state.nav
            }
        default:
            return state
    }
}

export default reducers