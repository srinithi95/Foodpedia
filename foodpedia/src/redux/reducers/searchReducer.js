const INITIAL_STATE = {
    find: '',
    near: ''
}


const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SEARCH":
            console.log('REDUCER: SEARCHING')
            return {
                ...state, 
                find: action.find, 
                near: action.near
            };
        default:
            return state;
    }
}

export default searchReducer