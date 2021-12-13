export const login = (email) => {
    console.log('ACTION: LOGIN')
    return {
        type: 'LOGIN',
        email: email,
    }
}

export const register = (name,password,email) => {
    console.log('ACTION: REGISTER')
    return {
        type: 'REGISTER',
        name: name,
        password: password,
        email: email,
        restaurant: false
    }
}
