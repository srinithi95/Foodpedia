const INITIAL_STATE = {
    cart: []
}


const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CART":
            console.log('REDUCER: CART')
            console.log(state)
            const newState = state.cart.map(item=>item);
            newState.push(action.payload)
            return {
                ...state, cart:newState
                
            };
        default:
            return state;
    }
}

export default searchReducer