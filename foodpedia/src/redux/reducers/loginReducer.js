const INITIAL_STATE = {
    USERMODE: false,
    userList: [
        {name:'chris',password:'hello',email:'email@email',restaurant:false},
        {name:'jimmy',password:'hello',email:'email@email',restaurant:true}
    ],
    sessionEmail: '',
    RES:false,
    RESTWO:false,

}


const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log('REDUCER: LOGIN')
            console.log(action.email)
            return {
                ...state, sessionEmail:action.email,USERMODE:true
            };
        case "RES":
            console.log('REDUCER: res')

            return {
                ...state, RES:true
            }; 
            
        case "RESTWO":
            console.log('REDUCER: res2')

            return {
                ...state, RESTWO:true
            };     
        case "REGISTER":
            console.log('REDUCER: REGISTER')
            console.log(state)
            const newState = state.userList.map(item=>item);
            newState.push({name:action.name,password:action.password,email:action.email,restaurant:action.restaurant})
            return {
                ...state, userList:newState
            }    
        default:
            return state;
    }
}

export default loginReducer